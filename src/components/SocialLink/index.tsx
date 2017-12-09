import * as React from 'react'
import './social-link.css'

interface SocialLinkProps {
  fontName: string;
  link: string;
}

const SocialLink = ({ fontName, link }: SocialLinkProps) => (
  <a
    className="button mdl-button mdl-js-button mdl-button--icon social-link"
    target="_blank"
    href={link}
  >
    <i className={`fab ${fontName} fa-2x`}></i>
  </a>
)

export default SocialLink
