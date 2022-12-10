import {Link} from 'react-router-dom'
import {
  VideoDetailsContainer,
  VideoDetailsImage,
  VideoDetailsHeading,
  VideoDetailsParagraph,
} from './styledComponents'

const GamingVideoDetails = props => {
  const {video} = props
  const {id, thumbnailUrl, title, viewCount} = video
  console.log(video)
  return (
    <Link to={`/videos/${id}`}>
      <VideoDetailsContainer>
        <VideoDetailsImage src={thumbnailUrl} alt={title} />
        <VideoDetailsHeading>{title}</VideoDetailsHeading>
        <VideoDetailsParagraph>{viewCount} World Wide</VideoDetailsParagraph>
      </VideoDetailsContainer>
    </Link>
  )
}

export default GamingVideoDetails
