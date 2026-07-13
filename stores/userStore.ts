import { defineStore } from 'pinia'

export type UserRole = 'admin' | 'collaborator' | null

export interface AuthUser {
  id: number
  email: string
  first_name: string
  last_name: string
  full_name: string
  role: UserRole
  organization_id: number | null
}

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string | null>(null)
    const user = ref<AuthUser | null>(null)

    const isAuthenticated = computed(() => Boolean(token.value))
    const isAdmin = computed(() => user.value?.role === 'admin')
    const isCollaborator = computed(() => user.value?.role === 'collaborator')

    function setSession(newToken: string, newUser: AuthUser) {
      token.value = newToken
      user.value = newUser
    }

    function clearSession() {
      token.value = null
      user.value = null
    }

    return {
      token,
      user,
      isAuthenticated,
      isAdmin,
      isCollaborator,
      setSession,
      clearSession,
    }
  },
  {
    persist: true,
  },
)
