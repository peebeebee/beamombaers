module.exports = {
  siteMetadata: {
    title: "Bea Mombaers",
    description: "Bea Mombaers - interior design",
    twitterUsername: `@worldofbea`,
    image: `/gatsby-icon.png`,
    siteUrl: 'https://beamombaers.com'
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingXX",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 80,
          breakpoints: [480, 1080, 1920, 4000],
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
