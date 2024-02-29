export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "accounting-accounts": {
        Row: {
          id: string | null
          number: number
          organization_id: string
        }
        Insert: {
          id?: string | null
          number: number
          organization_id: string
        }
        Update: {
          id?: string | null
          number?: number
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounting-accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          }
        ]
      }
      approvers: {
        Row: {
          approvee_id: string
          approver_id: string
          id: string
        }
        Insert: {
          approvee_id: string
          approver_id: string
          id?: string
        }
        Update: {
          approvee_id?: string
          approver_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "approvers_approvee_id_fkey"
            columns: ["approvee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approvers_approver_id_fkey"
            columns: ["approver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      "billed-customers": {
        Row: {
          cancel_at_period_end: boolean
          current_period_end: string
          current_period_start: string
          metadata: Json
          organization_id: string
        }
        Insert: {
          cancel_at_period_end: boolean
          current_period_end: string
          current_period_start: string
          metadata: Json
          organization_id: string
        }
        Update: {
          cancel_at_period_end?: boolean
          current_period_end?: string
          current_period_start?: string
          metadata?: Json
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "billed-customers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          }
        ]
      }
      billing_information: {
        Row: {
          created_at: string
          description: string | null
          payment_method: string
          profile_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          payment_method: string
          profile_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          payment_method?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "billing_information_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts: {
        Row: {
          amount: number
          attachment: string | null
          created_at: string
          creator: string | null
          department_id: string | null
          description: string | null
          end_date: string
          id: string
          organization_id: string
          owner: string
          parent_contract: string | null
          project: string | null
          spend_category:
            | Database["public"]["Enums"]["contract_spend_category"]
            | null
          start_date: string
          status: Database["public"]["Enums"]["contract_status"]
          updated_at: string
          vendor_id: string
        }
        Insert: {
          amount?: number
          attachment?: string | null
          created_at?: string
          creator?: string | null
          department_id?: string | null
          description?: string | null
          end_date: string
          id?: string
          organization_id: string
          owner: string
          parent_contract?: string | null
          project?: string | null
          spend_category?:
            | Database["public"]["Enums"]["contract_spend_category"]
            | null
          start_date: string
          status?: Database["public"]["Enums"]["contract_status"]
          updated_at?: string
          vendor_id: string
        }
        Update: {
          amount?: number
          attachment?: string | null
          created_at?: string
          creator?: string | null
          department_id?: string | null
          description?: string | null
          end_date?: string
          id?: string
          organization_id?: string
          owner?: string
          parent_contract?: string | null
          project?: string | null
          spend_category?:
            | Database["public"]["Enums"]["contract_spend_category"]
            | null
          start_date?: string
          status?: Database["public"]["Enums"]["contract_status"]
          updated_at?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contracts_creator_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_parent_contract_fkey"
            columns: ["parent_contract"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_project_fkey"
            columns: ["project"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_creator_fkey"
            columns: ["creator"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          }
        ]
      }
      departments: {
        Row: {
          id: string
          name: string
          number: number
          organization_id: string
        }
        Insert: {
          id?: string
          name: string
          number: number
          organization_id: string
        }
        Update: {
          id?: string
          name?: string
          number?: number
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "departments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          }
        ]
      }
      organizations: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          approval_threshold: unknown | null
          created_at: string
          full_name: string | null
          id: string
          organization_id: string | null
          stripe_customer_id: string | null
          subscription_id: string | null
          updated_at: string
        }
        Insert: {
          approval_threshold?: unknown | null
          created_at?: string
          full_name?: string | null
          id: string
          organization_id?: string | null
          stripe_customer_id?: string | null
          subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          approval_threshold?: unknown | null
          created_at?: string
          full_name?: string | null
          id?: string
          organization_id?: string | null
          stripe_customer_id?: string | null
          subscription_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          id: string
          name: string
          organization_id: string
        }
        Insert: {
          id?: string
          name: string
          organization_id: string
        }
        Update: {
          id?: string
          name?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions: {
        Row: {
          created_at: string
          is_monthly: boolean
          profile_id: string
          stripe_subscription_id: string
        }
        Insert: {
          created_at?: string
          is_monthly: boolean
          profile_id: string
          stripe_subscription_id: string
        }
        Update: {
          created_at?: string
          is_monthly?: boolean
          profile_id?: string
          stripe_subscription_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      vendors: {
        Row: {
          department_id: string | null
          id: string
          name: string
          organization_id: string
        }
        Insert: {
          department_id?: string | null
          id?: string
          name: string
          organization_id: string
        }
        Update: {
          department_id?: string | null
          id?: string
          name?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendors_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendors_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      contract_department: "Accounting" | "IT" | "etc"
      contract_spend_category: "Testing" | "Manufacturing" | "Legal" | "etc"
      contract_status: "Pending" | "Active" | "Paid" | "Partially Paid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
