import { z } from "zod";
import { passwordSchema } from "./passwordSchema.js";

export const loginSchema = z.object({
    email : z
        .string()
        .trim()
        .email("Invalid email Format !!!"),
    password : passwordSchema
});