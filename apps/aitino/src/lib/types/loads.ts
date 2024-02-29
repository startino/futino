// Contains types for +page.server.ts files data properties

import * as models from "$lib/types/models";

export type SessionLoad = {
	maeveId: string | null;
	sessionId: string | null;
	messages: models.Message[];
	reply: string;
};

export type MaeveLoad = {
	maeve: models.Maeve;
};
