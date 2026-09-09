import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'
import AuthProvider from '@/components/provider/auth'

export default function RootProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode()

  // Change theme
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className='min-h-svh bg-background text-foreground'>
      <AuthProvider />
      {children}
    </div>
  )
}
