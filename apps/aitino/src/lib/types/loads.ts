// Contains types for +page.server.ts files data properties

import * as models from "$lib/types/models";

export type SessionLoad = {
	profileId: string;
	maeveId: string | null;
	session: models.Session | null;
	messages: models.Message[];
	reply: string;
};

export type MaeveLoad = {
	profileId: string;
	maeve: models.Maeve;
};
