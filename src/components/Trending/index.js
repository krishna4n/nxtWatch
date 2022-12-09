import {Component} from 'react'
import {
  TrendingContainer,
  ContentContainer,
  TrendingLogoContainer,
  TrendingLogo,
  TrendingHeading,
  SidebarContainer,
} from './styledComponents'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

class Trending extends Component {
  render() {
    return (
      <>
        <Header />
        <TrendingContainer>
          <SidebarContainer>
            <SideNavbar />
          </SidebarContainer>
          <ContentContainer>
            <TrendingLogoContainer>
              <TrendingLogo src="" alt="trending" />
              <TrendingHeading>Trending</TrendingHeading>
            </TrendingLogoContainer>
          </ContentContainer>
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
