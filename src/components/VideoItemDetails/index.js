import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import {
  TrendingContainer,
  SidebarContainer,
  FailedViewContainer,
  FailedViewImage,
  FailedViewHeading,
  FailedViewParagraph,
  FailedViewButton,
} from '../Trending/styledComponents'
import SideNavbar from '../SideNavbar'
import {
  VideoItemDetailsContainer,
  ViewsContainer,
  ViewParagraph,
  SpecialIconsContainer,
  GroupContainer,
  CustomImage,
  GroupDetailsContainer,
  Paragraph,
  CustomButton,
} from './styledComponents'
import SaveContext from '../Context/SaveContext'

class VideoItemDetails extends Component {
  state = {
    appStatus: 'LOADING',
    videosList: [],
    like: false,
    unlike: false,
    updatedList: [],
  }

  requestStatus = {
    loading: 'LOADING',
    success: 'SUCCESS',
    failed: 'FAILED',
  }

  componentDidMount() {
    this.getApiData()
  }

  loadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  successView = () => (
    <SaveContext.Consumer>
      {value => {
        const {videosList, like, unlike, save} = this.state
        const likeColor = like ? '#2563eb' : '#64748b'
        const unlikeColor = unlike ? '#2563eb' : '#64748b'

        const {
          channel,
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videosList

        const channelData = {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
          subscriberCount: channel.subscriber_count,
        }

        const {name, profileImageUrl, subscriberCount} = channelData
        const {updateSavedList} = value
        const onUpdateSavedList = () => {
          this.setState(prevState => ({
            save: !prevState.save,
          }))
          updateSavedList(videosList)
        }

        const saveText = save ? 'Saved' : 'Save'
        const saveColor = save ? '#2563eb' : '#64748b'

        return (
          <VideoItemDetailsContainer data-testid="videoItemDetails">
            <ReactPlayer url={videoUrl} width="75vw" />
            <Paragraph>{title}</Paragraph>
            <ViewsContainer>
              <ViewParagraph>
                {viewCount} views . {publishedAt}
              </ViewParagraph>
              <SpecialIconsContainer>
                <CustomButton onClick={this.likeClicked} color={likeColor}>
                  <BiLike />
                  Like
                </CustomButton>
                <CustomButton onClick={this.unlikeClicked} color={unlikeColor}>
                  <BiDislike />
                  Dislike
                </CustomButton>
                <CustomButton onClick={onUpdateSavedList} color={saveColor}>
                  <BiListPlus />
                  {saveText}
                </CustomButton>
              </SpecialIconsContainer>
            </ViewsContainer>
            <GroupContainer>
              <CustomImage src={profileImageUrl} alt="channel logo" />
              <GroupDetailsContainer>
                <Paragraph>{name}</Paragraph>
                <Paragraph>{subscriberCount} subscribers</Paragraph>
                <Paragraph>{description}</Paragraph>
              </GroupDetailsContainer>
            </GroupContainer>
          </VideoItemDetailsContainer>
        )
      }}
    </SaveContext.Consumer>
  )

  likeClicked = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      unlike: false,
    }))
  }

  unlikeClicked = () => {
    this.setState(prevState => ({
      unlike: !prevState.unlike,
      like: false,
    }))
  }

  saveClicked = event => {
    this.setState(prevState => ({
      updatedList: [...prevState.updatedList, event.target.id],
    }))
  }

  failedView = () => (
    <FailedViewContainer>
      <FailedViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailedViewHeading>Oops! Something Went Wrong</FailedViewHeading>
      <FailedViewParagraph>
        We are having some trouble to complete your request. Please try again.
      </FailedViewParagraph>
      <FailedViewButton onClick={this.getApiData}>Retry</FailedViewButton>
    </FailedViewContainer>
  )

  getApiData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookie.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    console.log(videoItemDetailsApiUrl)
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()
    const video = data.video_details
    console.log(data)
    if (response.ok) {
      const videos = {
        id: video.id,
        channel: video.channel,
        description: video.description,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        videoUrl: video.video_url,
        viewCount: video.view_count,
      }
      console.log(video)
      this.setState({
        videosList: videos,
        appStatus: this.requestStatus.success,
      })
    } else {
      this.setState({
        appStatus: this.requestStatus.failed,
      })
    }
  }

  renderingOptions = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case this.requestStatus.loading:
        return this.loadingView()
      case this.requestStatus.success:
        return this.successView()
      case this.requestStatus.failed:
        return this.failedView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingContainer data-testid="videoItemDetails">
          <SidebarContainer>
            <SideNavbar />
          </SidebarContainer>
          {this.renderingOptions()}
        </TrendingContainer>
      </>
    )
  }
}

export default VideoItemDetails
