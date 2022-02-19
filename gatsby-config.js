const linkResolver = require('./src/utils/linkResolver.js')

require("dotenv").config({
  path:  `.env`,
 });


module.exports = {
  siteMetadata: {
    title: `The Great Sync Javascript Mental Model`,
    description: `Building a visual mental model for learning javascript. The Great Sync Javascript mental model will help you break down the fundamental concepts.`,
    author: `Kylo Robinson`,
    siteUrl: 'https://thegreatsync.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-open-graph-images`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'thegreatsync',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: (doc) => linkResolver(doc),
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        createLinkInHead: true,
        exclude: [`/__generated/*`, `/subscribed/`, `/unsubscribed/`, `/404/*`, `/downloads/*`, `/thankyou/`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-198198278-1", // Google Analytics / GA
           // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://codeimagined.us7.list-manage.com/subscribe/post?u=4d0492b044ab95eee11a945a2&amp;id=5649b5fa7d', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    }
  ],
}


