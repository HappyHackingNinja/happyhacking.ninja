import * as React from 'react'
import Link from 'gatsby-link'
import Logo from "../components/logo";
import SocialLink from "../components/SocialLink"

const IndexPage = () => (
  <div>
    <Logo />
    <div style={{ display: 'flex', justifyContent: 'center', margin: '5em 20%'}}>
      <SocialLink fontName='fa-twitter' link='https://twitter.com/_hhnj' />
      <SocialLink fontName='fa-github' link='https://github.com/HappyHackingNinja' />
    </div>
  </div>
)

export default IndexPage
