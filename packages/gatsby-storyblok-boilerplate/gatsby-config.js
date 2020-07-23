require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Gatsby + Storyblok starter",
    description: "Gatsby + Storyblok starter",
    author: "EF Global Creative",
    siteUrl: "https://www.example.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft"
      }
    },
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-plugin-sass"
  ]
};
