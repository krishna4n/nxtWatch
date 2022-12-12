import {Link} from 'react-router-dom'
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
    <Link to={`/videos/${id}`}>
      <VideoItemContainer>
        <ThumbnailContainer src={thumbnailUrl} alt="video thumbnail" />
        <VideoInfoContainer>
          <VideoProfileImage src={profileImageUrl} alt="channel logo" />
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
    </Link>
  )
}

export default VideoDetails
