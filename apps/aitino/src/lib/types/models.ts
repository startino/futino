import type { Edge, Node } from "@xyflow/svelte";

export type Message = {
	id: string;
	session_id: string;
	recipient: string;
	content: string;
	role: string;
	name: string;
	created_at: string;
};

export type Maeve = {
	id: string;
	profile_id: string;
	reciever_id: string;
	title: string;
	description: string;
	nodes: Node[];
	edges: Edge[];
	created_at: string;
};

export type Session = {
	id: string;
	maeve_id: string;
	user_id: string;
	created_at: string;
};
