import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bmark.agency';

  const paths = [
    { path: '', priority: 1.0, changeFrequency: 'yearly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/results', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/website-solutions', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ai-video', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/book', priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Arabic (default locale at root)
  paths.forEach(({ path, priority, changeFrequency }) => {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ar: `${baseUrl}${path}`,
          en: `${baseUrl}/en${path}`,
        },
      },
    });
  });

  // English (/en)
  paths.forEach(({ path, priority, changeFrequency }) => {
    sitemapEntries.push({
      url: `${baseUrl}/en${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ar: `${baseUrl}${path}`,
          en: `${baseUrl}/en${path}`,
        },
      },
    });
  });

  return sitemapEntries;
}
