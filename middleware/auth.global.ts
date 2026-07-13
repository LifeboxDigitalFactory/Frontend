export default defineNuxtRouteMiddleware(async (to) => {
  const userStore = useUserStore()
  const endpoints = useApiEndpoints()

  if (to.path === '/login') {
    if (userStore.isAuthenticated) {
      return navigateTo(
        userStore.isAdmin ? '/admin' : '/colaborador',
      )
    }
    return
  }

  if (!userStore.token) {
    return navigateTo('/login')
  }

  try {
    const data = await $fetch<{ user: typeof userStore.user }>(
      endpoints.verifyToken(),
      {
        method: 'POST',
        headers: { Authorization: `Token ${userStore.token}` },
      },
    )
    if (data.user) {
      userStore.user = data.user
    }
  } catch {
    userStore.clearSession()
    return navigateTo('/login')
  }

  if (to.path.startsWith('/admin') && !userStore.isAdmin) {
    return navigateTo('/colaborador')
  }

  if (to.path.startsWith('/colaborador') && !userStore.isCollaborator) {
    return navigateTo('/admin')
  }
})
