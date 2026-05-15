// next-sitemap.config.js

module.exports = {
  siteUrl: "https://www.printerdriverssupport.com/",
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};