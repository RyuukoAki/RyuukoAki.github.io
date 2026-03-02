// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const projects = defineCollection({
	// Load Markdown and MDX files in the `src/projects/` directory.
	loader: glob({ base: './src/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	    schema: z.object({
      title: z.string(),
	  subtitle: z.string(),
      description: z.string(),
      pubDate: z.date(),
	  status: z.string(),
      contributors: z.array(z.string()),
      heroImage: z.object({
        url: z.string(),
        alt: z.string()
      }),
	  imgGallery: z.array(z.object({
		url: z.string(),
		alt: z.string()
	  })),
	  youtubeEmbed: z.string().optional(),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { projects };