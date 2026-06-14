import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Update this to your actual live domain
  const baseUrl = 'https://bmark.agency';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
