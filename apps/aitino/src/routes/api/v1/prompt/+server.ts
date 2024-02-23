// src/routes/ImprovePrompt/+server.ts

import { json } from "@sveltejs/kit";

export const GET = async ({ url }) => {
	const prompt = url.searchParams.get("prompt");
	const wordLimit = url.searchParams.get("word_limit") || "300"; // Default to 300 if not provided
	if (!prompt) {
		// If no prompt is provided, return an error
		return json({ error: "No prompt provided" }, { status: 400 });
	}

	const apiUrl = `https://api.aiti.no/improve?word_limit=${wordLimit}&prompt=${encodeURIComponent(prompt)}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			// If the API response is not ok, throw an error
			throw new Error(`API call failed with status ${response.status}: ${response.statusText}`);
		}

		const data = await response.json();
		// Return the improved prompt from the API
		return json({ success: true, improvedPrompt: data });
	} catch (error) {
		console.error("Error calling external API:", error);
		// Return a server error response
		return json(
			{ error: "Failed to improve prompt due to an external API error." },
			{ status: 500 }
		);
	}
};
