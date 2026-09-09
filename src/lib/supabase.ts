import { createClient } from '@supabase/supabase-js'
import env from '@/lib/env'

export default createClient(
  env.supabase_url,
  env.supabase_anon_key
)
