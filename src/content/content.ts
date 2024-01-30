import { getCollection } from "astro:content";

export const blogPosts = await getCollection("blog");
