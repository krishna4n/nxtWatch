import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiTrendmicro, SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SidebarMenu,
  SidebarLink,
  ContactUsContainer,
  ContactUsHeading,
  LogosContainer,
  CustomLogo,
  ContactUsParagraph,
  Paragraph,
  Sidebar,
} from './styledComponents'

const SideNavbar = props => {
  const {history} = props
  console.log(history)
  console.log(props)
  return (
    <Sidebar>
      <SidebarMenu>
        <SidebarLink>
          <AiFillHome size="12" />
          <Paragraph>Home</Paragraph>
        </SidebarLink>
        <SidebarLink>
          <SiTrendmicro size="12" />
          <Paragraph>Trending</Paragraph>
        </SidebarLink>
        <SidebarLink>
          <SiYoutubegaming size="12" />
          <Paragraph>Gaming</Paragraph>
        </SidebarLink>
        <SidebarLink>
          <CgPlayListAdd size="12" />
          <Paragraph>Saved videos</Paragraph>
        </SidebarLink>
      </SidebarMenu>
      <ContactUsContainer>
        <ContactUsHeading>CONTACT US</ContactUsHeading>
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
}

export default withRouter(SideNavbar)
