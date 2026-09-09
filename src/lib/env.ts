import { z } from "zod"

const envSchema = z.object({
  supabase_url: z.url(),
  supabase_anon_key: z.string().min(1)
})

export default envSchema.parse({
  supabase_url: import.meta.env.VITE_SUPABASE_URL,
  supabase_anon_key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
})
