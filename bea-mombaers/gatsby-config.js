module.exports = {
  siteMetadata: {
    title: "Bea Mombaers",
    description: "Bea Mombaers description",
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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
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
