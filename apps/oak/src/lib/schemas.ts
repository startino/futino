import { z } from "zod";

export const registerUserSchema = z.object({
    fullName: z.string().max(140, "Name must be less than 140 characters."),
    email: z.string().email("Invalid email address"),
    password: z.string().max(96, "Password must be less than 96 characters").min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().max(96, "Password must be less than 96 characters").min(6, "Password must be at least 6 characters."),
});

export const loginUserSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(1, "Please enter a password")
});