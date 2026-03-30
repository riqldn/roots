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
