pnpm install @supabase/supabase-js

pnpm dlx supabase link --project-ref "$PROJECT_REF"
pnpm dlx supabase db pull

pnpm dlx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > src/lib/types/supabase.ts
