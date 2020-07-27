const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `Jon Rojas` } = options

  return {
    siteMetadata: {
      siteTitle: `Jon Rojas`,
      siteTitleAlt: `Jon Rojas`,
      siteHeadline: `Jon Rojas`,
      siteUrl: `https://jonathanrojas.com`,
      siteDescription: `The website of Jon Rojas.`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `Jon Rojas`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
