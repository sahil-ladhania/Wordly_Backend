import { z } from "zod";
import { passwordSchema } from "./passwordSchema.js";

export const signupSchema = z.object({
    firstName : z
        .string()
        .trim()
        .min(2 , "First Name must be at least 2 characters !!!")
        .max(30 , "First Name must be at most 30 characters !!!"),
    lastName : z
        .string()
        .trim()
        .min(2 , "Last Name must be at least 2 characters !!!")
        .max(30 , "Last Name must be at most 30 characters !!!"),
    email : z
        .string()
        .trim()
        .email("Invalid email Format !!!"),
    phone : z
        .string()
        .trim()
        .length(10 , "Phone Number must be exactly 10 digits !!!")
        .regex(/^\d+$/ , "Phone Number must contain only digits !!!"),
    password : passwordSchema ,
    confirmPassword : passwordSchema ,
    role : z
        .enum(["AUTHOR" , "READER"]),
})
.refine((data) => data.password === data.confirmPassword , {
    message: "Passwords do not match !!!",
    path: ["confirmPassword"]
});