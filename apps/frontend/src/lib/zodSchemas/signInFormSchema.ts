import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});