import { z } from "zod";

// Define the schema for the form
const formSchema = z.object({
	display_name: z
		.string()
		.min(1, { message: "Display Name is required" })
		.max(100, { message: "Display Name must be 100 characters or less" }),
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(100, { message: "Password must be 100 characters or less" })
});
