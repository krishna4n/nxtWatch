import Popup from 'reactjs-popup'
import Cookie from 'js-cookie'
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
  PopupContainer,
} from './styledComponents'
import SaveContext from '../Context/SaveContext'

const Header = props => (
  <SaveContext.Consumer>
    {value => {
      const {history} = props

      const logout = () => {
        Cookie.remove('jwt_token')
        history.replace('/login')
      }

      const {updateTheme, darkTheme} = value

      const clickedChangeTheme = () => {
        console.log('clicked')
        updateTheme()
      }

      const bgColor = darkTheme ? '#181818' : '#f9f9f9'

      return (
        <NavContainer bgColor={bgColor}>
          <Link to="/">
            <CustomLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </Link>
          <NavMenu>
            <CustomButton data-testid="theme" onClick={clickedChangeTheme}>
              <NavLink>
                <FaMoon size="20px" />
              </NavLink>
            </CustomButton>
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
              <Popup
                modal
                trigger={<CustomButton onClick={logout}>Logout</CustomButton>}
                className="popup-content"
              >
                {close => (
                  <PopupContainer>
                    <p>Are you sure, you want to logout</p>

                    <CustomButton onClick={logout}>Confirm</CustomButton>
                    <CustomButton
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CustomButton>
                  </PopupContainer>
                )}
              </Popup>
            </NavLinkLargeContainer>
          </NavMenu>
        </NavContainer>
      )
    }}
  </SaveContext.Consumer>
)

export default withRouter(Header)
