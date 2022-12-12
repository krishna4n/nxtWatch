import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'
import Header from '../Header'
import {GamingContainer, SidebarContainer} from '../Gaming/styledComponents'
import SideNavbar from '../SideNavbar'

const NotFound = () => (
  <>
    <Header />
    <GamingContainer>
      <SidebarContainer>
        <SideNavbar />
      </SidebarContainer>
      <NotFoundContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundParagraph>
          we are sorry, the page you requested could not be found.
        </NotFoundParagraph>
      </NotFoundContainer>
    </GamingContainer>
  </>
)

export default NotFound
