import { z } from "zod";

  export const consultingSevicesSchema = z.object({
    title: z.string(),
    metatitle: z.string(),
    type: z.string(),
    keywords: z.string().optional().nullable(),
    description: z.string(),
    url: z.string().optional().nullable(),
    path: z.string().optional().nullable(),
    categories: z.string().optional().nullable(),
    date: z.date().optional().nullable(),
    author: z.string().optional().nullable(),
    excerpt: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    catslug: z.array(z.string()).optional().nullable(),
    category: z.array(z.string()).optional().nullable(),
    weight: z.number().optional(),
    slugid: z.string().optional().nullable(),
    layout: z.string().optional().nullable(),
  })
  .strict();

  export const ipSevicesSchema = z.object({
    title: z.string(),
    patent_number: z.string(),
    date_issued:  z
    .string()
    .transform((str) => new Date(str))
    .optional(),
    inventors: z.string().optional().nullable(),
    categories: z.string().optional().nullable(),
    thumbnail: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    overview: z.string().optional().nullable(),
    slugid: z.string().optional().nullable(),
    application_filledby: z.string().optional().nullable(),
    application_granded:  z
    .string()
    .transform((str) => new Date(str))
    .optional(),    
    published_date: z
    .string()
    .transform((str) => new Date(str))
    .optional()
  }).strict();
