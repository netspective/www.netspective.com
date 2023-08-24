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
    .optional(),
    pdf: z.string().optional().nullable(),
  }).strict();
  export const intellectualPropertySchema = z.object({
    "uspto-canonical-id-label": z.string(),
    'uspto-publication-number': z.string(),
    "inventor": z.string(),
    "current-assignee": z.string().optional().nullable(),
    "patent-owners-rights": z.string().optional().nullable(),
    "territorial-scope": z.string().optional().nullable(),
    "uspto-patent-family-members-publication-numbers":  z.string().optional().nullable(),
    "uspto-patent-url": z.string().optional().nullable(),
    "application-date": z
    .date().optional(), 
    "issue-date": z
    .date().optional(), 
    "expiry-date": z
    .date().optional(), 
    "title": z.string().optional().nullable(),
    "topics": z.array(z.string()).optional().nullable(),
    "thumbnail": z.string().optional().nullable(),
    "url": z.string().optional().nullable(),
    "uspto-patent-pdf": z.string().optional().nullable(),
    "problem-solved-by-the-invention": z.string().optional().nullable(),
    "abstract-of-the-invention": z.string().optional().nullable(),
    "forward-citations": z.string().optional().nullable(),
    "backward-citations": z.string().optional().nullable(),
    "abstract-of-the-invention-label": z.string().optional().nullable(),
    "uspto-patent-citation-label": z.string().optional().nullable(),
    images: z.array(
      z.object({
        url: z.string().optional(),
        type: z.string().optional(),
      })
    ),
  }).strict();
