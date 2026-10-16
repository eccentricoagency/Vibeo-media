import { z } from "zod";

export const SUPPORT_TYPES = ["Management", "Protection", "Platform", "The full system"] as const;

/**
 * Shared between the browser and the server function, so the rules that the
 * form enforces are literally the same ones the server re-checks. Never trust
 * the client alone: the server validates this again on every request.
 */
export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  contact: z.string().trim().max(120).optional().or(z.literal("")),
  instagram: z.string().trim().max(120).optional().or(z.literal("")),
  platforms: z.string().trim().max(1000).optional().or(z.literal("")),
  country: z.string().trim().max(100).optional().or(z.literal("")),
  agency: z.string().trim().max(150).optional().or(z.literal("")),
  support: z.enum(SUPPORT_TYPES, {
    errorMap: () => ({ message: "Please choose the kind of support you need." }),
  }),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
  /**
   * Honeypot. Hidden from real users, irresistible to dumb bots: if it arrives
   * filled in, we silently drop the submission instead of emailing it.
   */
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
