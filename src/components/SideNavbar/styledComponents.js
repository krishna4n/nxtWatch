import styled from 'styled-components'

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactUsContainer = styled.div``

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: -10px;
  background-color: ${props => props.backgroundColor}
  color: ${props => props.color}
`

export const Sidebar = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`

export const CustomLogo = styled.img`
  padding: 10px;
  height: 40px;
`
export const ContactUsParagraph = styled.p`
  font-size: 11px;
`
export const ContactUsHeading = styled.h5``

export const LogosContainer = styled.div`
  padding-right: 70px;
  display: flex;
`

export const Paragraph = styled.p`
  font-size: 12px;
  margin-left: 20px;
`