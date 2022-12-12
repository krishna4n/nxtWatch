import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  font-family: Roboto;
`
export const LoginCard = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 400px;
  border: 1px solid #f1f5f9;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #f1f5f9;
`

export const LoginLogo = styled.img`
  height: 30px;
  margin-bottom: 10px;
`
export const CustomLabel = styled.label`
  margin-top: 30px;
  color: #475569;
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 10px;
`

export const CustomInput = styled.input`
  height: 40px;
  width: 300px;
  border: 1px solid #e2e8f0;
  padding: 10px;
  color: #94a3b8;
  font-size: 12px;
`

export const CustomCheckbox = styled.input``

export const CustomButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #3b82f6;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #ffffff;
`

export const Paragraph = styled.p`
  color: #475569;
  font-size: 12px;
  font-weight: 600;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const CheckBoxContainer = styled.div`
  display: flex;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CustomError = styled.p`
  align-self: flex-start;
  margin-left: 10px;
  color: #ff0000;
  font-size: 10px;
`
