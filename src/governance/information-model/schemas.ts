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
    nature: z.string(),
    uspto_publication_number: z.string(),
    inventor: z.string(),
    current_assignee: z.string().optional().nullable(),
    patent_owners_rights: z.string().optional().nullable(),
    territorial_scope: z.string().optional().nullable(),
    uspto_patent_family_members_publication_numbers:  z.string().optional().nullable(),
    external_links: z.string().optional().nullable(),
    application_date: z
    .date().optional(), 
    issue_date: z
    .date().optional(), 
    expiry_date: z
    .date().optional(), 
    left_content: z
    .object({
      title: z.string(),
      topics: z.array(z.string()).optional().nullable(),
      description: z.string(),
      thumbnail: z.string().optional().nullable(),
    })
    .optional(),
    url: z.string().optional().nullable(),
    uspto_patent_pdf: z.string().optional().nullable(),
  }).strict();
