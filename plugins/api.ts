export default defineNuxtPlugin(() => {
  const userStore = useUserStore()
  const config = useRuntimeConfig()

  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase as string,
    onRequest({ options }) {
      if (userStore.token) {
        const headers = new Headers(options.headers as HeadersInit)
        headers.set('Authorization', `Token ${userStore.token}`)
        options.headers = headers
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        userStore.clearSession()
        navigateTo('/login')
      }
    },
  })

  return {
    provide: {
      apiFetch,
    },
  }
})
