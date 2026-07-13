<script setup lang="ts">
const userStore = useUserStore()

await navigateTo(userStore.isAdmin ? '/admin' : '/colaborador')
</script>
