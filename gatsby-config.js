module.exports = {
  siteMetadata: {
    title: "Bea Mombaers",
    description: "Bea Mombaers - interior design",
    twitterUsername: `@worldofbea`,
    image: `/bea-icon.jpg`,
    siteUrl: 'https://beamombaers.com'
  },
  plugins: [
    "gatsby-plugin-sass",
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
          breakpoints: [480, 1080, 1280, 1440, 1920, 2560, 4000],
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
