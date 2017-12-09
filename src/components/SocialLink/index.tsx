import * as React from 'react'
import './social-link.css'

interface SocialLinkProps {
  fontName: string;
  link: string;
}

const SocialLink = ({ fontName, link }: SocialLinkProps) => (
  <a
    className="social-link button mdl-button mdl-js-button mdl-button--icon"
    target="_blank"
    href={link}
  >
    <i className={`social-link-icon fab ${fontName} fa-2x`}></i>
  </a>
)

export default SocialLink
