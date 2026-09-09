import { atom } from "jotai"
import type { Session, User } from "@supabase/supabase-js"

export default atom<{
  session: Session | null
  user: User | null,
  loading: boolean
}>({
  session: null,
  user: null,
  loading: true
})
