import {Component} from 'react'
import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  CustomLabel,
  CustomInput,
  CustomButton,
  LoginForm,
  CheckBoxContainer,
  Paragraph,
  CustomCheckbox,
  CustomError,
} from './styledComponent'

class Login extends Component {
  state = {username: '', password: '', isVisible: false, hasError: false}

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

  loginFailure = () => {
    this.setState({
      hasError: true,
    })
  }

  loginSubmitted = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (
      (username !== '' && password !== '') ||
      username !== '' ||
      password !== ''
    ) {
      const loginApiUrl = 'https://apis.ccbp.in/login'
      const userDetails = {username, password}
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }

      const response = await fetch(loginApiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const jwtToken = data.jwt_token
        this.setState({
          hasError: false,
        })
        this.LoginSuccessful(jwtToken)
      } else {
        this.loginFailure()
      }
    } else {
      this.loginFailure()
    }
  }

  checkBoxSelected = event => {
    this.setState({
      isVisible: event.target.checked,
    })
  }

  render() {
    const {username, password, hasError, isVisible} = this.state
    const passwordVisible = isVisible ? 'text' : 'password'
    return (
      <LoginContainer>
        <LoginCard>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <LoginForm onSubmit={this.loginSubmitted}>
            <CustomLabel htmlFor="username">USERNAME</CustomLabel>
            <CustomInput
              type="text"
              id="username"
              placeholder="USERNAME"
              onChange={this.changeUsername}
            />
            <CustomLabel htmlFor="password">PASSWORD</CustomLabel>
            <CustomInput
              type={passwordVisible}
              id="password"
              placeholder="PASSWORD"
              onChange={this.changePassword}
            />
            <CheckBoxContainer>
              <CustomCheckbox
                type="checkbox"
                id="checkbox"
                onClick={this.checkBoxSelected}
              />
              <Paragraph>Show Password</Paragraph>
            </CheckBoxContainer>
            <CustomButton type="submit">Login</CustomButton>
          </LoginForm>
          {hasError && (
            <CustomError>{`*Username and Password didn't match`}</CustomError>
          )}
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
