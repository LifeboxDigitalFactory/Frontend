<template>
  <div>
    <h1 class="text-h4 mb-2">Inicio colaborador</h1>
    <p class="text-body-1 text-medium-emphasis mb-6">
      Hola, {{ userStore.user?.full_name }}. Revisa tus cursos asignados.
    </p>
    <v-btn color="primary" to="/colaborador/my-courses">
      Ir a mis cursos
    </v-btn>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'colaborador' })
const userStore = useUserStore()
</script>
