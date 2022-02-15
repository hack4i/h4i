/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Hack For Inclusion",
    description:
      "India's first collegiate hackathon created exclusively for women and non-binary individuals, with a goal of creating a diverse and inclusive environment to pursue innovation.",
    author: "D-Big-B",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
