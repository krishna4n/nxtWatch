import {Link} from 'react-router-dom'
import {
  TrendingVideoDetailsContainer,
  CustomImage,
  VideoDetailsParagraph,
  VideoDetailsViewContainer,
  DetailsViewParagraph,
} from './styledComponents'
import {VideoDetailsContainer} from '../VideoDetails/styledComponents'

const TrendingVideoDetails = props => {
  const {video} = props
  const {thumbnailUrl, title, viewCount, publishedAt, id, channel} = video
  const channelList = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name} = channelList
  console.log(video)
  return (
    <Link to={`/videos/${id}`}>
      <TrendingVideoDetailsContainer>
        <CustomImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <VideoDetailsParagraph>{title}</VideoDetailsParagraph>
          <VideoDetailsParagraph>{name}</VideoDetailsParagraph>
          <VideoDetailsViewContainer>
            <DetailsViewParagraph>{viewCount} views</DetailsViewParagraph>
            <DetailsViewParagraph>{publishedAt}</DetailsViewParagraph>
          </VideoDetailsViewContainer>
        </VideoDetailsContainer>
      </TrendingVideoDetailsContainer>
    </Link>
  )
}

export default TrendingVideoDetails
