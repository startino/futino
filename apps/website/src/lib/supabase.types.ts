export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      baptaTours: {
        Row: {
          created_at: string;
          email: string | null;
          firstName: string | null;
          id: number;
          lastName: string | null;
          message: string | null;
          people: number | null;
          tours: string | null;
          whatsapp: string | null;
        };
        Insert: {
          created_at: string;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
          message?: string | null;
          people?: number | null;
          tours?: string | null;
          whatsapp?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
          message?: string | null;
          people?: number | null;
          tours?: string | null;
          whatsapp?: string | null;
        };
        Relationships: [];
      };
      "Contact Forms": {
        Row: {
          created_at: string;
          email: string | null;
          id: number;
          message: string | null;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: number;
          message?: string | null;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: number;
          message?: string | null;
          name?: string | null;
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
