import type { MetadataRoute } from 'next';

const nameDomain = "https://www.bizworkit.com";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${nameDomain}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${nameDomain}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${nameDomain}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
