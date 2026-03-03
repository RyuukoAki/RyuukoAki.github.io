// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const projects = defineCollection({
	// Load Markdown and MDX files in the `src/collections/projects/` directory.
	loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects" }),
	// Type-check frontmatter using a schema
	    schema: ({ image }) => z.object({
		
      		title: z.string(),
			description: z.string(),
			pubDate: z.string(),
			status: z.string(),
			contributors: z.array(z.string()),
			cover: image(),
			coverAlt: z.string(),
	  		gallery: z.array(z.object({
				img : image(),
				alt: z.string()
	  		})),
	  		youtubeEmbed: z.string().optional(),
     		tags: z.array(z.string())
   			})
});

// Export a single `collections` object to register your collection(s)
export const collections = { projects };