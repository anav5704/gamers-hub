import { defineCollection, z } from "astro:content";
import {format} from "date-fns"

// Zod schema for blog
const blogCollection = defineCollection({
    schema: ({ image }) =>
     z.object({
            author: z.string(),
            date: z.string().transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
    })
})

export const collections = {
    blog: blogCollection
}