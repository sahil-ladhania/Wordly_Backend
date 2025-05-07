import { z } from "zod";

const passwordRegex = {
    specialChar: /[^A-Za-z0-9]/g,
    uppercase: /[A-Z]/g,
    digit: /\d/g,
};

export const passwordSchema = z
    .string()
    .trim()
    .min(8 , "Password must be at least 8 characters !!!")
    .max(12 , "Password must be at most 12 characters !!!")
    .refine(val => (val.match(passwordRegex.specialChar) || []).length >= 1 , "At least 1 special character required !!!")
    .refine(val => (val.match(passwordRegex.specialChar) || []).length <= 3 , "Max 3 special characters allowed !!!")
    .refine(val => (val.match(passwordRegex.uppercase) || []).length >= 1 , "At least 1 uppercase letter required !!!")
    .refine(val => (val.match(passwordRegex.uppercase) || []).length <= 3 , "Max 3 uppercase letters allowed !!!")
    .refine(val => (val.match(passwordRegex.digit) || []).length >= 1 , "At least 1 number required !!!")
    .refine(val => (val.match(passwordRegex.digit) || []).length <= 3 , "Max 3 numbers allowed !!!");
