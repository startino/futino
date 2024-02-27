import { json } from "@sveltejs/kit";
import { API_BASE_URL } from "$lib/config";

export const GET = async ({ url }) => {
	const session_id = url.searchParams.get("session_id");
	const id = url.searchParams.get("meave_id");
	const reply = url.searchParams.get("reply");
	// const params = url.searchParams.get("params");

	console.log(id, session_id, reply, "from reply id api");

	if (!id || !reply) {
		return json({ error: "No id provided" }, { status: 400 });
	}


	const apiUrl = `${API_BASE_URL}/maeve?id=${id}&session_id=${session_id}&reply=${encodeURIComponent(reply)}`;


	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			return json(
				{ error: `API call failed with status ${response.status}: ${response.statusText}` },
				{ status: 500 }
			);
		}

		console.log(response, "response from ba");

		const data = [];
		const reader = response.body.getReader();

		try {
			while (true) {
				const { done, value } = await reader.read();
				// let notVal = new TextDecoder().decode(value);
				// console.log(notVal, "res data 0");

				// console.log(value, "value");
				// console.log(done, "done");
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

		const responseData = new TextDecoder().decode(buffer);

		// console.log(responseData, "res data");
		return json({ content: responseData });
	} catch (error) {
		console.error("Error calling external API:", error);
		return json({ error: "Failed to get response due to an external API error." }, { status: 500 });
	}
};
