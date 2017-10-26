module.exports = {
  siteMetadata: {
    title: `Happy Hacking Gatsby`,
    author: `Kehao Chen`,
  },
  plugins: [
    // Intercepts local links from markdown
    `gatsby-plugin-catch-links`,
    // Document head manager
    `gatsby-plugin-react-helmet`,
    // Provides drop-in support for TypeScript and TSX
    `gatsby-plugin-typescript`,
    // Creating File nodes from the file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    // Parses Markdown files using Remark
    `gatsby-transformer-remark`,
  ],
}
