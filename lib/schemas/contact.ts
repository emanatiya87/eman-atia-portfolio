import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Enter a valid email address"),
  mobile: z
    .string()
    .trim()
    .regex(/^[+0-9\s-]{8,20}$/, "Enter a valid mobile number"),
  message: z.string().trim().min(10, "Message should be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
