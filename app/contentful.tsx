// lib/contentful.ts
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
});

export async function getWorks() {
  const res = await client.getEntries({
    content_type: "works",
    "fields.featured": true, // also change 'yes' to true — it's a Boolean field in your schema
    include: 2, // resolves linked category entries
  });
  return res.items;
}

export async function getCountries() {
  const res = await client.getEntries({
    content_type: "countries",
  });
  return res.items;
}

export async function getSectors() {
  const res = await client.getEntries({
    content_type: "sectors",
  });
  return res.items;
}

export async function getEngagements() {
  const res = await client.getEntries({
    content_type: "engagementModels",
  });
  return res.items;
}


export async function getWorkBySlug(slug: string): Promise<any> {
  const res = await client.getEntries({
    content_type: 'works',
    'fields.slug': slug,
    include: 2,
  })
  return res.items[0] || null
}

export async function getAllWorkSlugs(): Promise<string[]> {
  const res = await client.getEntries({
    content_type: 'works',
    select: ['fields.slug'],
  })
  return res.items.map((item: any) => item.fields.slug as string)
}

export async function getAllWorks(): Promise<any[]> {
  const res = await client.getEntries({
    content_type: 'works',
    include: 2,
  })
  return res.items
}

export async function getAllReports(): Promise<any[]> {
  const res = await client.getEntries({
    content_type: 'reports',

  })
  return res.items
}
export async function getReports() {
  const res = await client.getEntries({
    content_type: "reports",
    "fields.featured": true, // also change 'yes' to true — it's a Boolean field in your schema

  });
  return res.items;
}

export async function getReportBySlug(slug: string): Promise<any> {
  const res = await client.getEntries({
    content_type: 'reports',
    'fields.slug': slug,
   
  })
  return res.items[0] || null
}
export async function getAllReportSlugs(): Promise<string[]> {
  const res = await client.getEntries({
    content_type: 'reports',
    select: ['fields.slug'],
  })
  return res.items.map((item: any) => item.fields.slug as string)
}