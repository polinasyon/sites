import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    heroImage: image(), // Yerel görselleri otomatik işlemesi için tekrar image() yaptık
  }),
});

export const collections = { blog };

