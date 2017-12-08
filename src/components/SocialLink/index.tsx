import * as React from 'react'

interface SocialLinkProps {
  fontName: string;
  link: string;
}

const SocialLink = ({ fontName, link }: SocialLinkProps) => (
  <a
    className="button mdl-button mdl-js-button mdl-button--icon"
    style={{ height: 64, width: 64, minWidth: "initial" }}
    target="_blank"
    href={link}
  >
    <i className={`material-icons fab ${fontName} fa-5x`}></i>
  </a>
)

export default SocialLink
