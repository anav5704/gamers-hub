import { defineCollection, z } from "astro:content";

// Zod schema for blog
const blogCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        data: z.string(),
        image: z.string(),
        title: z.string(),
    })
})

export const collections = {
    blog: blogCollection
}