import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 235px;
  }
`
export const ThumbnailContainer = styled.img`
  height: 60px;
  width: 100px;

  @media screen and (min-width: 768px) {
    height: 120px;
    width: 245px;
  }
`
export const VideoInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -5px;
`

export const VideoDetailsContainer = styled.div``
export const VideoProfileImage = styled.img`
  height: 30px;
`

export const VideoViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoTextContainer = styled.div`
  padding: 10px;
`
export const VideoInfoParagraph = styled.p`
  font-family: Roboto;
  font-size: 10px;
  margin-right: 10px;
`
export const VideoViewsParagraph = styled.p`
  color: #94a3b8;
  font-size: 10px;
  margin-right: 10px;
  margin-top: -5px;
`
