<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable" elevation="1">
      <template #prepend>
        <img
          src="/lifebox_icon.png"
          alt="Lifebox"
          class="brand-icon ml-2 mr-2"
        />
      </template>
      <v-app-bar-title class="font-weight-medium">Academy</v-app-bar-title>
      <v-btn variant="text" to="/colaborador">Inicio</v-btn>
      <v-btn variant="text" to="/colaborador/my-courses">Mis cursos</v-btn>
      <v-spacer />
      <span class="text-caption mr-4">{{ userStore.user?.full_name }}</span>
      <v-btn variant="outlined" class="mr-2" @click="logout">Salir</v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="py-8">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const userStore = useUserStore()

function logout() {
  userStore.clearSession()
  navigateTo('/login')
}
</script>

<style scoped>
.brand-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 6px;
  background: white;
  padding: 3px;
}
</style>
