import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {
  GamingContainer,
  SidebarContainer,
  ContentContainer,
  FailedViewContainer,
  FailedViewParagraph,
  FailedViewButton,
  FailedViewHeading,
  FailedViewImage,
  NoVideoContainer,
  NoVideoHeading,
  NoVideoImage,
  NoVideoParagraph,
  TrendingHeading,
  TrendingLogo,
  TrendingLogoContainer,
  VideosViewContainer,
} from './styledComponents'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import GamingVideoDetails from '../GamingVideoDetails'

class Gaming extends Component {
  state = {appStatus: 'LOADING', gamingVideosList: []}

  requestStatus = {
    success: 'SUCCESS',
    failed: 'FAILED',
    loading: 'LOADING',
    noVideos: 'NO-VIDEOS',
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const jwtToken = Cookie.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      if (data.videos.length > 0) {
        const videos = data.videos.map(each => ({
          id: each.id,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))

        this.setState({
          gamingVideosList: videos,
          appStatus: this.requestStatus.success,
        })
      } else {
        this.setState({
          appStatus: this.requestStatus.noVideos,
        })
      }
    } else {
      this.setState({
        appStatus: this.requestStatus.failed,
      })
    }
  }

  loadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  successView = () => {
    const {gamingVideosList} = this.state

    return (
      <>
        <TrendingLogoContainer>
          <TrendingLogo>
            <SiYoutubegaming color="#ff0000" size="22px" />
          </TrendingLogo>
          <TrendingHeading>Gaming</TrendingHeading>
        </TrendingLogoContainer>
        <VideosViewContainer>
          {gamingVideosList.map(each => (
            <GamingVideoDetails video={each} key={each.id} />
          ))}
        </VideosViewContainer>
      </>
    )
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

  noVideosView = () => (
    <NoVideoContainer>
      <NoVideoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no video"
      />
      <NoVideoHeading>No Search results found</NoVideoHeading>
      <NoVideoParagraph>
        Try different key words or remove filter
      </NoVideoParagraph>
      <FailedViewButton onClick={this.getApiData}>Retry</FailedViewButton>
    </NoVideoContainer>
  )

  renderingOptions = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case this.requestStatus.loading:
        return this.loadingView()
      case this.requestStatus.success:
        return this.successView()
      case this.requestStatus.failed:
        return this.failedView()
      case this.requestStatus.noVideos:
        return this.noVideosView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingContainer data-testid="gaming">
          <SidebarContainer>
            <SideNavbar />
          </SidebarContainer>
          <ContentContainer>{this.renderingOptions()}</ContentContainer>
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
