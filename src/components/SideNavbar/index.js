import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SidebarMenu,
  SidebarLink,
  ContactUsContainer,
  LogosContainer,
  CustomLogo,
  ContactUsParagraph,
  Paragraph,
  Sidebar,
} from './styledComponents'
import SaveContext from '../Context/SaveContext'

const SideNavbar = () => (
  <SaveContext.Consumer>
    {value => {
      const {darkTheme} = value
      const bgColor = darkTheme ? '#181818' : '#f9f9f9'
      return (
        <Sidebar bgColor={bgColor}>
          <SidebarMenu>
            <SidebarLink>
              <AiFillHome size="12" />
              <Paragraph>
                <Link to="/">Home</Link>
              </Paragraph>
            </SidebarLink>
            <SidebarLink>
              <HiFire size="12" />
              <Paragraph>
                <Link to="/trending">Trending</Link>
              </Paragraph>
            </SidebarLink>
            <Link to="/gaming">
              <SidebarLink>
                <SiYoutubegaming size="12" />
                <Paragraph>Gaming</Paragraph>
              </SidebarLink>
            </Link>
            <Link to="/saved-videos">
              <SidebarLink>
                <CgPlayListAdd size="12" />
                <Paragraph>Saved videos</Paragraph>
              </SidebarLink>
            </Link>
          </SidebarMenu>
          <ContactUsContainer>
            <ContactUsParagraph>CONTACT US</ContactUsParagraph>
            <LogosContainer>
              <CustomLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <CustomLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <CustomLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogosContainer>
            <ContactUsParagraph>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsParagraph>
          </ContactUsContainer>
        </Sidebar>
      )
    }}
  </SaveContext.Consumer>
)

export default withRouter(SideNavbar)
