<template>
  <div>
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4">Cursos</h1>
        <p class="text-body-2 text-medium-emphasis">
          Listado de cursos de tu organización
        </p>
      </div>
    </div>

    <v-alert
      v-if="error"
      type="error"
      class="mb-4"
      variant="tonal"
    >
      {{ error }}
    </v-alert>

    <v-progress-linear v-if="pending" indeterminate class="mb-4" />

    <v-table v-else>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Versión</th>
          <th>Duración (h)</th>
          <th>Activo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!courses?.length">
          <td colspan="4" class="text-medium-emphasis py-6">
            No hay cursos aún.
          </td>
        </tr>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.full_name }}</td>
          <td>{{ course.version }}</td>
          <td>{{ course.duration_hours }}</td>
          <td>{{ course.is_active ? 'Sí' : 'No' }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

interface Course {
  id: number
  full_name: string
  description: string
  duration_hours: number
  version: string
  is_active: boolean
}

const endpoints = useApiEndpoints()
const userStore = useUserStore()

const { data: courses, pending, error: fetchError } = await useAsyncData(
  'admin-courses',
  () =>
    $fetch<Course[]>(endpoints.courses(), {
      headers: { Authorization: `Token ${userStore.token}` },
    }),
)

const error = computed(() =>
  fetchError.value ? 'No se pudo cargar el listado de cursos' : '',
)
</script>
