import supabase from "@/lib/supabase"
import authAtom from "@/store/auth"

// Hooks
import { useEffect } from "react"
import { useAtom } from "jotai"
import { useNavigate } from '@tanstack/react-router'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useAtom(authAtom)
  const navigate = useNavigate()

  // Set auth state
  useEffect(() => {
    // When first loading
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuth({
        session: session,
        user: session?.user ?? null,
        loading: false
      })
    })

    // When auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuth({
        session,
        user: session?.user ?? null,
        loading: false
      })
    })

    // When cleanup, unsubscribe subscription.
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // When user is guest, redirect to login page.
  useEffect(() => {
    if (!auth.loading && !auth.user) {
      navigate({ to: "/login", replace: true })
    }
  }, [auth])

  return children
}
