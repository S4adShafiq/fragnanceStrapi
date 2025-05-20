export default () => ({
  'strapi-5-sitemap-plugin': {
    enabled: true,
    config: {
      autoGenerate: true,
      caching: true,
      maxEntriesPerSitemap: 5000,
      includeDrafts: false,
      hostname: 'https://your-frontend-url.com', // replace with your actual frontend URL
      exclude: ['/admin'],
    },
  },

  seo: {
    enabled: true,
    config: {
      // you can add SEO plugin config here if needed
    },
  },
});
