import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {
  TrendingContainer,
  ContentContainer,
  TrendingLogoContainer,
  TrendingHeading,
  SidebarContainer,
  TrendingLogo,
  VideosViewContainer,
  FailedViewContainer,
  FailedViewHeading,
  FailedViewImage,
  FailedViewParagraph,
  FailedViewButton,
  NoVideoContainer,
  NoVideoHeading,
  NoVideoImage,
  NoVideoParagraph,
} from './styledComponents'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import TrendingVideoDetails from '../TrendingVideoDetails'
import SaveContext from '../Context/SaveContext'

class Trending extends Component {
  state = {appStatus: 'LOADING', trendingVideosList: []}

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
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      if (data.videos.length > 0) {
        const videos = data.videos.map(each => ({
          channel: each.channel,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))

        this.setState({
          trendingVideosList: videos,
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
    const {trendingVideosList} = this.state

    return (
      <>
        <TrendingLogoContainer>
          <TrendingLogo>
            <HiFire color="#ff0000" size="22px" />
          </TrendingLogo>
          <TrendingHeading>Trending</TrendingHeading>
        </TrendingLogoContainer>
        <VideosViewContainer>
          {trendingVideosList.map(each => (
            <TrendingVideoDetails
              key={each.id}
              video={each}
              text="Trending Videos"
            />
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
      <FailedViewButton>Retry</FailedViewButton>
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
      <SaveContext.Consumer>
        {value => {
          const {darkTheme} = value

          const bgColor = darkTheme ? '#181818' : '#f9f9f9'
          return (
            <div data-testid="trending">
              <Header />
              <TrendingContainer>
                <SidebarContainer>
                  <SideNavbar />
                </SidebarContainer>
                <ContentContainer bgColor={bgColor}>
                  {this.renderingOptions()}
                </ContentContainer>
              </TrendingContainer>
            </div>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default Trending
