<template>
  <v-app>
    <v-main class="auth-shell d-flex align-center justify-center">
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped>
.auth-shell {
  min-height: 100vh;
  background:
    radial-gradient(
      ellipse at top left,
      rgba(11, 110, 79, 0.12),
      transparent 50%
    ),
    radial-gradient(
      ellipse at bottom right,
      rgba(26, 83, 92, 0.1),
      transparent 45%
    ),
    #f7f9f8;
}
</style>
