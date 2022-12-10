import SaveContext from '../Context/SaveContext'
import Header from '../Header'
import {GamingContainer} from '../Gaming/styledComponents'
import {SidebarContainer, ContentContainer} from '../Trending/styledComponents'
import SideNavbar from '../SideNavbar'

const SavedVideos = () => (
  <SaveContext.Consumer>
    {value => {
      const {savedList} = value(
        <>
          <Header />
          <GamingContainer>
            <SidebarContainer>
              <SideNavbar />
            </SidebarContainer>
            <ContentContainer>fsfsd</ContentContainer>
          </GamingContainer>
        </>,
      )
    }}
  </SaveContext.Consumer>
)

export default SavedVideos
