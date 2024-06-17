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
      accounts: {
        Row: {
          created_at: string
          description: string | null
          id: string
          number: string
          organization_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          number: string
          organization_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          number?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounting-accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      bill_rejections: {
        Row: {
          bill_id: string
          created_at: string
          creator_id: string
          id: string
          note: string
        }
        Insert: {
          bill_id: string
          created_at?: string
          creator_id: string
          id?: string
          note: string
        }
        Update: {
          bill_id?: string
          created_at?: string
          creator_id?: string
          id?: string
          note?: string
        }
        Relationships: [
          {
            foreignKeyName: "bill_rejections_bill_id_fkey"
            columns: ["bill_id"]
            isOneToOne: false
            referencedRelation: "bills"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bill_rejections_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
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
          },
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
          },
        ]
      }
      bills: {
        Row: {
          account_id: string | null
          accrual_period: string
          amount: number
          approver_id: string | null
          attachment: string
          contract_id: string
          created_at: string
          creator_id: string | null
          department_id: string | null
          description: string | null
          due_date: string
          id: string
          invoice_date: string
          organization_id: string
          posting_period: string | null
          project_id: string | null
          spend_category_id: string | null
          status: Database["public"]["Enums"]["bill_status"]
          vendor_id: string | null
        }
        Insert: {
          account_id?: string | null
          accrual_period: string
          amount: number
          approver_id?: string | null
          attachment: string
          contract_id?: string
          created_at?: string
          creator_id?: string | null
          department_id?: string | null
          description?: string | null
          due_date: string
          id?: string
          invoice_date: string
          organization_id?: string
          posting_period?: string | null
          project_id?: string | null
          spend_category_id?: string | null
          status?: Database["public"]["Enums"]["bill_status"]
          vendor_id?: string | null
        }
        Update: {
          account_id?: string | null
          accrual_period?: string
          amount?: number
          approver_id?: string | null
          attachment?: string
          contract_id?: string
          created_at?: string
          creator_id?: string | null
          department_id?: string | null
          description?: string | null
          due_date?: string
          id?: string
          invoice_date?: string
          organization_id?: string
          posting_period?: string | null
          project_id?: string | null
          spend_category_id?: string | null
          status?: Database["public"]["Enums"]["bill_status"]
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bills_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_approver_id_fkey"
            columns: ["approver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_spend_category_id_fkey"
            columns: ["spend_category_id"]
            isOneToOne: false
            referencedRelation: "spend_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bills_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      contract_rejections: {
        Row: {
          contract_id: string | null
          created_at: string
          creator_id: string
          id: string
          note: string | null
        }
        Insert: {
          contract_id?: string | null
          created_at?: string
          creator_id: string
          id?: string
          note?: string | null
        }
        Update: {
          contract_id?: string | null
          created_at?: string
          creator_id?: string
          id?: string
          note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contract_rejections_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contract_rejections_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          account_id: string | null
          amount: number
          approver_id: string | null
          attachment: string
          created_at: string
          department_id: string | null
          description: string | null
          end_date: string
          id: string
          number: number
          organization_id: string
          owner_id: string | null
          parent_contract_id: string | null
          project_id: string | null
          signed: boolean | null
          signer_id: string | null
          spend_category_id: string | null
          start_date: string
          status: Database["public"]["Enums"]["contract_status"]
          updated_at: string
          vendor_id: string
          version: number
        }
        Insert: {
          account_id?: string | null
          amount?: number
          approver_id?: string | null
          attachment?: string
          created_at?: string
          department_id?: string | null
          description?: string | null
          end_date: string
          id?: string
          number?: number
          organization_id: string
          owner_id?: string | null
          parent_contract_id?: string | null
          project_id?: string | null
          signed?: boolean | null
          signer_id?: string | null
          spend_category_id?: string | null
          start_date: string
          status?: Database["public"]["Enums"]["contract_status"]
          updated_at?: string
          vendor_id: string
          version?: number
        }
        Update: {
          account_id?: string | null
          amount?: number
          approver_id?: string | null
          attachment?: string
          created_at?: string
          department_id?: string | null
          description?: string | null
          end_date?: string
          id?: string
          number?: number
          organization_id?: string
          owner_id?: string | null
          parent_contract_id?: string | null
          project_id?: string | null
          signed?: boolean | null
          signer_id?: string | null
          spend_category_id?: string | null
          start_date?: string
          status?: Database["public"]["Enums"]["contract_status"]
          updated_at?: string
          vendor_id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "contracts_approver_id_fkey"
            columns: ["approver_id"]
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
            foreignKeyName: "contracts_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_parent_contract_id_fkey"
            columns: ["parent_contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_project_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_signer_id_fkey"
            columns: ["signer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
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
            foreignKeyName: "public_contracts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contracts_spent_category_id_fkey"
            columns: ["spend_category_id"]
            isOneToOne: false
            referencedRelation: "spend_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      departments: {
        Row: {
          created_at: string
          id: string
          name: string
          number: number
          organization_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          number: number
          organization_id: string
        }
        Update: {
          created_at?: string
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
          },
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
          approval_threshold: number | null
          approver_id: string | null
          created_at: string
          department_id: string | null
          full_name: string | null
          id: string
          organization_id: string | null
          roles: Database["public"]["Enums"]["role"][] | null
          stripe_customer_id: string | null
          subscription_id: string | null
          updated_at: string
        }
        Insert: {
          approval_threshold?: number | null
          approver_id?: string | null
          created_at?: string
          department_id?: string | null
          full_name?: string | null
          id: string
          organization_id?: string | null
          roles?: Database["public"]["Enums"]["role"][] | null
          stripe_customer_id?: string | null
          subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          approval_threshold?: number | null
          approver_id?: string | null
          created_at?: string
          department_id?: string | null
          full_name?: string | null
          id?: string
          organization_id?: string | null
          roles?: Database["public"]["Enums"]["role"][] | null
          stripe_customer_id?: string | null
          subscription_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_approver_id_fkey"
            columns: ["approver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
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
          },
        ]
      }
      projects: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          organization_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          organization_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
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
          },
        ]
      }
      resource_policy: {
        Row: {
          content: Json
          id: string
        }
        Insert: {
          content: Json
          id?: string
        }
        Update: {
          content?: Json
          id?: string
        }
        Relationships: []
      }
      spend_categories: {
        Row: {
          created_at: string
          id: string
          name: string
          organization_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          organization_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_spend_categories_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
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
          },
        ]
      }
      vendors: {
        Row: {
          created_at: string | null
          department_id: string | null
          id: string
          name: string
          organization_id: string
        }
        Insert: {
          created_at?: string | null
          department_id?: string | null
          id?: string
          name: string
          organization_id: string
        }
        Update: {
          created_at?: string | null
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
          },
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
      bill_status: "pending approval" | "rejected" | "approved"
      contract_department: "Accounting" | "IT" | "etc"
      contract_spend_category: "Testing" | "Manufacturing" | "Legal" | "etc"
      contract_status:
        | "pending approval"
        | "active"
        | "finished"
        | "under review"
        | "approved"
        | "rejected"
      group: "member"
      role: "admin" | "employee" | "signer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
