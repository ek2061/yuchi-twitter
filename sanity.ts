import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-11-16", // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document !== "undefined", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
};

export const sanityClient = createClient(config);
