import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin: 6rem 0 1rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  color: ${props => props.theme.colors.grey};
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`

const Footer = () => (
  <Wrapper data-testid="footer">
    Copyright &copy; 2018 - Design {' '} <a href="https://www.lekoarts.de/en">LekoArts</a>. {' '}
    <br /><br />
    Enhanced by <a href="https://www.lekoarts.de/en">AppSeed</a> with {' '}
    <a href="https://github.com/rosoftdeveloper/starter-gatsbyjs-emma/blob/master/deploy.js">FTP Deploy script</a> and authentication (soon).{' '}
    <a href="https://github.com/rosoftdeveloper/starter-gatsbyjs-emma/blob/master/">MIT License</a>
    <br /><br />
    Need more FREE starters? {' '}
    <a href="https://starter-gatsbyjs-dimension.appseed.us/">Dimension</a>, {' '}
    <a href="https://starter-gatsbyjs-jodie.appseed.us/">Jodie</a>, {' '}
    <a href="https://starter-gatsbyjs-strata.appseed.us/">Strata</a>, {' '}
    <a href="https://starter-gatsbyjs-material-kit.appseed.us/">Material-Kit</a> {' '}
  </Wrapper>
)

export default Footer
