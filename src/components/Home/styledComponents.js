import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
`
export const BodyContainer = styled.div`
  display: flex;
`
export const SidebarContainer = styled.div`
  padding: 0px 10px 10px 10px;
  width: 15vw;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
`
export const FailedViewContainer = styled.div`
  text-align: center;
`

export const FailedViewImage = styled.img`
  margin: 10px;
  height: 300px;
`

export const FailedViewParagraph = styled.p`
  font-size: 10px;
`

export const FailedViewHeading = styled.h4``

export const FailedViewButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 10px;
  border: none;
  outline: none;
  margin-bottom: 10px;
`
export const NoVideoContainer = styled.div``
export const NoVideoImage = styled.img``
export const NoVideoHeading = styled.h4``
export const NoVideoParagraph = styled.p``

export const Paragraph = styled.p`
  font-size: 12px;
  margin-left: 20px;
`

export const CustomBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 78vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`
export const CustomBannerLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CustomBannerParagraph = styled.p`
  font-size: 8px;
`

export const CustomGetItButton = styled.button`
  align-self: flex-start;
  background-color: transparent;
  padding: 5px;
  border-width: thin;
  font-size: 8px;
`
export const DataViewContainer = styled.div`
  width: 85vw;
  background-color: ${props => props.bgColor};
  padding: 10px;
  border-radius: 5px;
`
export const VideoDetailsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const SearchInputContainer = styled.div`
  align-self: flex-start;
  background-color: #ffffff;
  border-color: #94a3b8;
  border-width: thin;
  outline: none;
  padding: 2px;
  height: 22px;
  display: flex;
  align-items: center;
`

export const CustomSearch = styled.input`
  width: 220px;
  margin-right: 5px;
  outline: none;
  font-size: 14px;
`
export const SearchButton = styled.button`
background-color: transparent:
outline:none;

`
