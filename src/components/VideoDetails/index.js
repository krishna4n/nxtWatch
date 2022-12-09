import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemContainer,
  ThumbnailContainer,
  VideoProfileImage,
  VideoInfoContainer,
  VideoInfoParagraph,
  VideoViewsContainer,
  VideoTextContainer,
  VideoViewsParagraph,
} from './styledComponents'

const VideoDetails = props => {
  const {video} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = video
  const channelData = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = channelData
  return (
    <VideoItemContainer>
      <ThumbnailContainer src={thumbnailUrl} alt="" />
      <VideoInfoContainer>
        <VideoProfileImage src={profileImageUrl} alt={name} />
        <VideoTextContainer>
          <VideoInfoParagraph>{title}</VideoInfoParagraph>
          <VideoViewsParagraph>{name}</VideoViewsParagraph>
          <VideoViewsContainer>
            <VideoViewsParagraph>{viewCount} views</VideoViewsParagraph>
            <VideoViewsParagraph>
              &#x2022; {formatDistanceToNow(new Date(publishedAt))}
            </VideoViewsParagraph>
          </VideoViewsContainer>
        </VideoTextContainer>
      </VideoInfoContainer>
    </VideoItemContainer>
  )
}

export default VideoDetails
