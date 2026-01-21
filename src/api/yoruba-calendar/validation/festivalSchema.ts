import { z } from "zod";

export const festivalSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  orisaId: z.string(),
  country: z.string(),
  eventType: z.enum(["physical", "virtual"]),
  timezone: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});
