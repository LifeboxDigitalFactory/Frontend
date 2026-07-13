<template>
  <div class="d-flex flex-column align-center">
    <img
      src="/lifebox_logo.png"
      alt="Lifebox"
      class="login-logo mb-6"
    />
    <v-card width="420" class="pa-6" elevation="2" rounded="lg">
      <h1 class="text-h5 mb-1">Iniciar sesión</h1>
      <p class="text-body-2 text-medium-emphasis mb-6">
        Academy
      </p>
      <v-alert
        v-if="error"
        type="error"
        class="mb-4"
        density="compact"
        variant="tonal"
      >
        {{ error }}
      </v-alert>
      <v-form @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          autocomplete="username"
          class="mb-2"
        />
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          autocomplete="current-password"
          class="mb-4"
        />
        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          :loading="loading"
        >
          Entrar
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const userStore = useUserStore()
const endpoints = useApiEndpoints()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

async function onSubmit() {
  loading.value = true
  error.value = ''
  try {
    const data = await $fetch<{
      token: string
      user: NonNullable<typeof userStore.user>
    }>(endpoints.login(), {
      method: 'POST',
      body: { email: email.value, password: password.value },
    })
    userStore.setSession(data.token, data.user)
    await navigateTo(data.user.role === 'admin' ? '/admin' : '/colaborador')
  } catch (e: unknown) {
    const err = e as { data?: { text?: string } }
    error.value = err?.data?.text || 'No se pudo iniciar sesión'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
}
</style>
