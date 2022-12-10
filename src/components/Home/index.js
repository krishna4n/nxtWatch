import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'

import {MdClose} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import Header from '../Header'
import {
  HomeContainer,
  BodyContainer,
  SidebarContainer,
  DataContainer,
  CustomBanner,
  CustomBannerLogoContainer,
  CustomBannerParagraph,
  CustomGetItButton,
  SearchInputContainer,
  CustomSearch,
  DataViewContainer,
  VideoDetailsContainer,
  FailedViewContainer,
  FailedViewImage,
  FailedViewParagraph,
  FailedViewButton,
  FailedViewHeading,
  NoVideoContainer,
  NoVideoImage,
  NoVideoHeading,
  NoVideoParagraph,
  SearchButton,
} from './styledComponents'
import {CustomLogo, CustomImage} from '../Header/styledComponents'
import VideoDetails from '../VideoDetails'
import SideNavbar from '../SideNavbar'

class Home extends Component {
  state = {videosList: [], isLoading: 'LOADING', searchInput: ''}

  appStatus = {
    success: 'SUCCESS',
    failed: 'FAILED',
    loading: 'LOADING',
    novideos: 'NOVIDEOS',
  }

  componentDidMount() {
    this.getVideosUrl()
  }

  renderVideosView = () => {
    const {videosList} = this.state
    return (
      <VideoDetailsContainer>
        {videosList.map(each => (
          <VideoDetails key={each.id} video={each} />
        ))}
      </VideoDetailsContainer>
    )
  }

  renderFailedView = () => (
    <FailedViewContainer>
      <FailedViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt=""
      />
      <FailedViewHeading>Oops! Something Went Wrong</FailedViewHeading>
      <FailedViewParagraph>
        We are having some trouble to complete your request. Please try again.
      </FailedViewParagraph>
      <FailedViewButton>Retry</FailedViewButton>
    </FailedViewContainer>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderNoVideosView = () => (
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

  getVideosUrl = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookie.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const videos = data.videos.map(each => ({
        id: each.id,
        channel: each.channel,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        videosList: videos,
        isLoading: this.appStatus.success,
      })
    } else {
      this.setState({
        isLoading: this.appStatus.failed,
      })
    }
  }

  renderingOptions = () => {
    const {isLoading} = this.state
    switch (isLoading) {
      case this.appStatus.loading:
        return this.renderLoadingView()
      case this.appStatus.success:
        return this.renderVideosView()
      case this.appStatus.failed:
        return this.renderFailedView()
      case this.appStatus.novideos:
        return this.renderNoVideosView()

      default:
        return null
    }
  }

  onSearch = event => {
    event.preventDefault()
    this.getVideosUrl()
  }

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <HomeContainer data-testid="home">
        <Header />
        <BodyContainer>
          <SidebarContainer>
            <SideNavbar />
          </SidebarContainer>
          <DataContainer>
            <CustomBanner>
              <CustomBannerLogoContainer>
                <CustomImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <MdClose data-testid="close" />
              </CustomBannerLogoContainer>
              <CustomBannerParagraph>
                Buy Nxt Watch Premium prepaid plans with UPI
              </CustomBannerParagraph>
              <CustomGetItButton>GET IT NOW</CustomGetItButton>
            </CustomBanner>
            <DataViewContainer>
              <SearchInputContainer
                type="button"
                value={searchInput}
                onChange={this.changeSearchInput}
              >
                <CustomSearch type="search" placeholder="Search" />
                <SearchButton type="button" onClick={this.onSearch}>
                  <BiSearch />
                </SearchButton>
              </SearchInputContainer>

              {this.renderingOptions()}
            </DataViewContainer>
          </DataContainer>
        </BodyContainer>
      </HomeContainer>
    )
  }
}

export default Home
