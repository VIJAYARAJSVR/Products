import type {GatsbyConfig} from "gatsby";



const config: GatsbyConfig = {
  pathPrefix: `/Products`,
  siteMetadata: {
    siteUrl: "https://vijayarajsvr.github.io/Products",
    title: `Vijayaraj's Products`,
    description: `List of Products which I have developed`,
    author: `vijayaraj suyambu`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `All Projects`,
        link: `/projects`,
      },
      {
        name: `Certification`,
        link: `/certifications`,
      },
      {
        name: `Dashboard`,
        link: `/dashboard`,
      },
      {
        name: `About`,
        link: `/about`,
      }]
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },


    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content-images",
        "path": "./content/images"
      },
      __key: "content-images"
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
      // options: {
      //   name: `gatsby-starter-bootstrap-5`,
      //   short_name: `gb5-starter`,
      //   start_url: `/`,
      //   background_color: `#663399`,
      //   theme_color: `#663399`,
      //   display: `standalone`,
      //   icon: `src/images/vijayaraj.png`, // This path is relative to the root of the site.
      // },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
export default config;