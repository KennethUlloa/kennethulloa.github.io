import { z } from "zod";

export const personalInfoSchema = z.object({
  title: z.string(),
  about: z.string(),
});

export const globalInfoSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string(),
  links: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
      icon: z.string(),
    })
  ),
});

export const experienceSchema = z.object({
  companyName: z.string(),
  role: z.string(),
  startDate: z.string().date().or(z.date()),
  endDate: z.string().date().or(z.date()).optional(),
  activities: z.array(z.string()),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().url().optional(),
  links: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
    })
  ),
});

export const techItemSchema = z.object({
  name: z.string(),
  image: z.string(),
});


export const skillSchema = z.object({
  name: z.string(),
  description: z.string(),
});