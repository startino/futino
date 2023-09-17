export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			Attendance: {
				Row: {
					created_at: string;
					day: number;
					id: number;
					month: number;
					name: string;
				};
				Insert: {
					created_at?: string;
					day: number;
					id?: number;
					month: number;
					name: string;
				};
				Update: {
					created_at?: string;
					day?: number;
					id?: number;
					month?: number;
					name?: string;
				};
				Relationships: [];
			};
			bapta: {
				Row: {
					choice: string;
					contact: string;
					created_at: string;
					id: number;
					name: string;
					people: number;
				};
				Insert: {
					choice: string;
					contact: string;
					created_at?: string;
					id?: number;
					name: string;
					people: number;
				};
				Update: {
					choice?: string;
					contact?: string;
					created_at?: string;
					id?: number;
					name?: string;
					people?: number;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
