import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { experienceSchema, projectSchema, techItemSchema, skillSchema } from "./schemas";

const experience = defineCollection({
  loader: glob({pattern: "**/*.yml", base: "src/content/experience"}),
  schema: experienceSchema
})

const projects = defineCollection({
  loader: glob({pattern: "**/*.yml", base: "src/content/projects"}),
  schema: projectSchema
})

const techStack = defineCollection({
  loader: file("./src/content/techStack.yml"),
  schema: techItemSchema
})

const skills = defineCollection({
  loader: glob({pattern: "**/*.yml", base: "src/content/skills"}),
  schema: z.array(skillSchema)
})

export const collections = {
  experience,
  projects,
  techStack,
  skills
};
