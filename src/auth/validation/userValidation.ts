import { email, z } from "zod";
import { App, UserType } from "../../core/enums";

export const createUserSchema = z.object({
  name: z.string().optional(),
  email: z.email(),
  password: z.string().optional(),
  app: z
    .string()
    .transform((v) => v.toUpperCase())
    .pipe(z.enum(App)),
  type: z
    .string()
    .transform((v) => v.toUpperCase())
    .pipe(z.enum(UserType)),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().optional(),
  provider: z.enum(["LOCAL", "GOOGLE"]).optional(),
  app: z.string().optional(),
});

export const EmailSchema = z.object({ email: z.email() });
