// Contains types for +page.server.ts files data properties

import * as models from "./models";

export type SessionLoad = {
	maeveId: string | null;
	sessionId: string | null;
	messages: models.Message[];
	reply: string;
};
