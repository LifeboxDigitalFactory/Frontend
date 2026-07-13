<template>
  <div>
    <h1 class="text-h4 mb-2">Panel admin</h1>
    <p class="text-body-1 text-medium-emphasis mb-6">
      Bienvenido, {{ userStore.user?.full_name }}. Usa el menú para gestionar
      cursos e inscripciones.
    </p>
    <v-row>
      <v-col cols="12" md="6">
        <v-card to="/admin/courses" variant="outlined" class="pa-4">
          <div class="text-h6">Cursos</div>
          <div class="text-body-2">Gestión de cursos</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card to="/admin/enrollments" variant="outlined" class="pa-4">
          <div class="text-h6">Inscripciones</div>
          <div class="text-body-2">Próximamente</div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })
const userStore = useUserStore()
</script>
