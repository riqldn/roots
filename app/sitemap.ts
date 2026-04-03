import { MetadataRoute } from "next";

const baseUrl = "https://riserootsgroup.co.uk";

// 👉 Fetch Contentful Works
async function getWorks() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?content_type=works&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      { next: { revalidate: 60 } } // ISR-style caching
    );

    const data = await res.json();

    return data.items || [];
  } catch (error) {
    console.error("Sitemap fetch error:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await getWorks();

  const portfolioUrls = works.map((item: any) => ({
    url: `${baseUrl}/portfolio/${item.fields.slug}`,
    lastModified: new Date(item.sys.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // 🏠 Static pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/approach`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 📁 Dynamic CMS pages
    ...portfolioUrls,
  ];
}