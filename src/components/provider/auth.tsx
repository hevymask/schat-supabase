import { useEffect } from "react"
import { useSetAtom, useAtom } from "jotai"
import { useNavigate } from '@tanstack/react-router'

import supabase from "@/lib/supabase"
import authAtom from "@/store/auth"

export default function AuthProvider() {
  const setAuth = useSetAtom(authAtom)
  const [auth] = useAtom(authAtom)
  const navigate = useNavigate()

  // Set auth state
  useEffect(() => {
    // First
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuth({
        session: session,
        user: session?.user ?? null,
        loading: false
      })
    })

    // When auth changes
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
  }, [setAuth])

  // When guest, redirect to login page.
  useEffect(() => {
    if (!auth.loading && !auth.user) {
      navigate({ to: "/login", replace: true })
    }
  }, [auth])

  return null
}
