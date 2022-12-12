import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  background-color: ${props => props.bgColor};
  align-self: flex-start;
  width: 85vw;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
`

export const TrendingLogoContainer = styled.div`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 40px;
  border-radius: 5px;
`
export const SidebarContainer = styled.div`
  padding: 0px 10px 10px 10px;
  width: 15vw;
`
export const TrendingHeading = styled.h2`
  margin-left: 10px;
`
export const TrendingLogo = styled.div`
  height: 60px;
  width: 60px;
  padding: 19px;
  border-radius: 40px;
  background-color: #e2e8f0;
`
export const VideosViewContainer = styled.ul`
  list-style-type: none;
`

export const FailedViewContainer = styled.div`
  width: 80vw;
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

export const NoVideoContainer = styled.div`
  width: 80vw;
  text-align: center;
`
export const NoVideoImage = styled.img``
export const NoVideoHeading = styled.h4``
export const NoVideoParagraph = styled.p``
