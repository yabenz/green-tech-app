import type { User } from '@/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  sessionToken: string | null
  userData: User | null
  setSessionToken: (token: string | null) => void
  setUserData: (user: User | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      sessionToken: null,
      userData: null,
      setSessionToken: (token) => set({ sessionToken: token }),
      setUserData: (user) => {
        console.log('Setting userData in store:', user)
        set({ userData: user })
      },
      logout: () => set({ sessionToken: null, userData: null }),
    }),
    {
      name: 'auth-storage', 
    }
  )
)
