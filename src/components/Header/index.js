import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {
  NavContainer,
  CustomLogo,
  NavLink,
  NavMenu,
  NavLinkLargeContainer,
  CustomButton,
  CustomImage,
} from './styledComponents'

const Header = () => (
  <NavContainer>
    <CustomLogo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="website logo"
    />
    <NavMenu>
      <NavLink>
        <FaMoon size="20px" />
      </NavLink>
      <NavLink>
        <GiHamburgerMenu size="20px" />
      </NavLink>
      <NavLink>
        <FiLogOut size="20px" />
      </NavLink>
      <NavLinkLargeContainer>
        <FaMoon size="20px" />
      </NavLinkLargeContainer>
      <NavLinkLargeContainer>
        <CustomImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
      </NavLinkLargeContainer>
      <NavLinkLargeContainer>
        <CustomButton>Logout</CustomButton>
      </NavLinkLargeContainer>
    </NavMenu>
  </NavContainer>
)

export default withRouter(Header)
