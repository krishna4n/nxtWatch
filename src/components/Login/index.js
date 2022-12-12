import {Component} from 'react'
import Cookie from 'js-cookie'
import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  CustomLabel,
  CustomInput,
  CustomButton,
  LoginForm,
  CheckBoxContainer,
  CustomCheckbox,
  CustomError,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    isVisible: false,
    hasError: false,
  }

  changeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  changePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  loginFailure = msg => {
    this.setState({
      hasError: true,
      errMsg: msg,
    })
  }

  LoginSuccessful = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginSubmitted = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (
      (username !== '' && password !== '') ||
      username !== '' ||
      password !== ''
    ) {
      if (response.ok) {
        const jwtToken = data.jwt_token
        this.setState({
          hasError: false,
        })
        this.LoginSuccessful(jwtToken)
      } else {
        const msg = data.error_msg
        this.loginFailure(msg)
      }
    } else {
      const msg = data.error_msg
      this.loginFailure(msg)
    }
  }

  checkBoxSelected = event => {
    this.setState({
      isVisible: event.target.checked,
    })
  }

  render() {
    const {hasError, isVisible, errMsg, username, password} = this.state
    const jwtToken = Cookie.get('jwt_token')
    const {history} = this.props
    if (jwtToken !== undefined) {
      history.replace('/')
    }
    const passwordVisible = isVisible ? 'text' : 'password'
    const checked = isVisible
    return (
      <LoginContainer>
        <LoginCard>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginForm onSubmit={this.loginSubmitted}>
            <CustomLabel htmlFor="username">USERNAME</CustomLabel>
            <CustomInput
              type="text"
              id="username"
              placeholder="USERNAME"
              value={username}
              onChange={this.changeUsername}
            />
            <CustomLabel htmlFor="password">PASSWORD</CustomLabel>
            <CustomInput
              type={passwordVisible}
              id="password"
              placeholder="PASSWORD"
              value={password}
              onChange={this.changePassword}
            />
            <CheckBoxContainer>
              <CustomCheckbox
                type="checkbox"
                id="checkbox"
                onClick={this.checkBoxSelected}
                checked={checked}
              />
              <CustomLabel id="checkbox">Show Password</CustomLabel>
            </CheckBoxContainer>
            <CustomButton type="submit">Login</CustomButton>
          </LoginForm>
          {hasError && <CustomError>*{errMsg}</CustomError>}
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
