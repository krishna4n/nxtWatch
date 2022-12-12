import {HiFire} from 'react-icons/hi'
import SaveContext from '../Context/SaveContext'
import Header from '../Header'
import {GamingContainer} from '../Gaming/styledComponents'
import {
  SidebarContainer,
  ContentContainer,
  TrendingLogoContainer,
  TrendingLogo,
  TrendingHeading,
} from '../Trending/styledComponents'
import SideNavbar from '../SideNavbar'
import TrendingVideoDetails from '../TrendingVideoDetails'
import {
  NoSavedVideoImage,
  NoSavedVideoHeading,
  NoSavedVideoParagraph,
  NoSavedVideoContainer,
  SavedVideosViewContainer,
} from './styledComponents'

const SavedVideos = () => (
  <SaveContext.Consumer>
    {value => {
      const {savedList} = value

      return (
        <>
          <Header />

          <GamingContainer>
            <SidebarContainer>
              <SideNavbar />
            </SidebarContainer>
            <ContentContainer>
              <TrendingLogoContainer>
                <TrendingLogo>
                  <HiFire color="#ff0000" size="22px" />
                </TrendingLogo>
                <TrendingHeading>Saved Videos</TrendingHeading>
              </TrendingLogoContainer>
              <SavedVideosViewContainer>
                {savedList.length > 0 &&
                  savedList.map(each => (
                    <TrendingVideoDetails video={each} key={each.id} />
                  ))}
              </SavedVideosViewContainer>
              {savedList.length === 0 && (
                <NoSavedVideoContainer>
                  <NoSavedVideoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideoHeading>
                    No saved videos found
                  </NoSavedVideoHeading>
                  <NoSavedVideoParagraph>
                    You can save your videos while watching them
                  </NoSavedVideoParagraph>
                </NoSavedVideoContainer>
              )}
            </ContentContainer>
          </GamingContainer>
        </>
      )
    }}
  </SaveContext.Consumer>
)

export default SavedVideos
