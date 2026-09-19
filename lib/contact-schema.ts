import { z } from "zod";

export const contactFormSchema = z.object({
  services: z
    .array(z.string())
    .min(1, { message: "Please select at least one service." }),
  budget: z
    .string()
    .min(1, { message: "Please select an approximate budget range." }),
  timeline: z
    .string()
    .min(1, { message: "Please select your desired launch timeline." }),
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid work email address." }),
  company: z.string().trim().optional().default(""),
  website: z.string().trim().optional().default(""),
  message: z
    .string()
    .trim()
    .max(2000, { message: "Project details must be under 2000 characters." })
    .optional()
    .default(""),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
