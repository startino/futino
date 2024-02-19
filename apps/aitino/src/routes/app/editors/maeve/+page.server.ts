import { getMaeveNodes } from '$lib/api-client';
import type { Edge, Node } from '@xyflow/svelte';
import { writeFileSync, readFile, readFileSync} from 'fs';
import { fail } from '@sveltejs/kit';

export const load = async ({ locals: { userId } }) => {
	const { data } = await getMaeveNodes(userId);

	let [nodes, edges]: [Node[], Edge[]] = [[], []];

	if (data) {
		nodes = data.nodes;
		edges = data.edges;
	}

	return {
		id: data ? data.id : undefined,
		userId,
		nodes,
		edges,
		count: {
			agents: nodes.filter((n) => n.type === 'agent').length,
			prompts: nodes.filter((n) => n.type === 'prompt').length
		}
	};
};



export const actions = {
  loadMaeve: async ({ request }) => {
	

    const formData = Object.fromEntries(await request.formData());

 

    if ( !(formData.fileToUpload as File).name || (formData.fileToUpload as File).name === 'undefined' ) {

      return fail(400, {

        error: true,

        message: 'You must provide a file to upload'

      });

    }

    const { fileToUpload } = formData as { fileToUpload: File };

	try {
		// Assuming fileToUpload is a path to the file
		let content = fileToUpload.text;
		//let rawData = readFileSync(, 'utf8');
		//let jsonData = JSON.parse(rawData);
		console.log(content);
	} 
	catch (error) {
		console.error(error);
		return fail(500, {
			error: true,
			message: 'Failed to read file content'
		});
	}

    return {
      success: true
    };


  }
};

