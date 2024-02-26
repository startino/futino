import { json } from "@sveltejs/kit";
import { API_BASE_URL } from "$lib/config";

export const GET = async ({ url }) => {
	const id = url.searchParams.get("id");
	if (!id) {
		return json({ error: "No id provided" }, { status: 400 });
	}

	const apiUrl = `${API_BASE_URL}/maeve?id=${id}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			return json(
				{ error: `API call failed with status ${response.status}: ${response.statusText}` },
				{ status: 500 }
			);
		}

		let data = [];
		const reader = response.body.getReader();
		let responseData;

		try {
			while (true) {
				const { done, value } = await reader.read();
				responseData = new TextDecoder().decode(value);
				console.log(responseData, "res data 0");

				console.log(value, "value");
				console.log(done, "done");
				if (done) break;
				data.push(value);
			}
		} catch (error) {
			console.error("Error reading response stream:", error);
			return json({ error: "Failed to read response stream due to an error." }, { status: 500 });
		}

		const buffer = new Uint8Array(data.reduce((total, chunk) => total + chunk.length, 0));
		let position = 0;
		for (const chunk of data) {
			buffer.set(chunk, position);
			position += chunk.length;
		}

		console.log(buffer, "buffer is from");

		responseData = new TextDecoder().decode(buffer);
		console.log(responseData, "res data 1");
		console.log(data, " data 1");
		return json({ content: responseData });
	} catch (error) {
		console.error("Error calling external API:", error);
		return json({ error: "Failed to get response due to an external API error." }, { status: 500 });
	}
};
