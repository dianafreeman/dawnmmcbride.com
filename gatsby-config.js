const contactInfo = require('./src/content/contactInfo.json')

module.exports = {
  siteMetadata: {
    title: `Dawn M McBride, PhD`,
    description: `Dawn M. McBride, PhD. is a Professor of Psychology at Illinois State University.`,
    author: `Dawn M McBride, PhD`,
    contactInfo: contactInfo,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dawnmmcbride.com`,
        short_name: `dmmcbri`,
        start_url: `/`,
        background_color: `#4e7ba3`,
        theme_color: `#5d8fbc`,
        display: `minimal-ui`,
        icon: `src/images/ilstu.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
