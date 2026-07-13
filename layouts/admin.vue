<template>
  <v-app>
    <v-navigation-drawer permanent color="secondary" theme="dark" width="240">
      <div class="pa-4 d-flex align-center ga-3">
        <img
          src="/lifebox_icon.png"
          alt="Lifebox"
          class="brand-icon"
        />
        <div>
          <div class="text-subtitle-1 font-weight-bold">Lifebox</div>
          <div class="text-caption opacity-80">Academy</div>
        </div>
      </div>
      <v-divider />
      <v-list nav>
        <v-list-item
          title="Inicio"
          prepend-icon="mdi-view-dashboard"
          to="/admin"
        />
        <v-list-item
          title="Cursos"
          prepend-icon="mdi-book-open-variant"
          to="/admin/courses"
        />
        <v-list-item
          title="Inscripciones"
          prepend-icon="mdi-account-multiple"
          to="/admin/enrollments"
        />
      </v-list>
      <template #append>
        <div class="pa-4">
          <div class="text-caption mb-2">{{ userStore.user?.email }}</div>
          <v-btn block variant="outlined" @click="logout">Cerrar sesión</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-6">
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
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 8px;
  background: white;
  padding: 4px;
}
</style>
