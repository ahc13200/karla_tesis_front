<script setup lang="ts">
  import { TwTheme, RThemeProvider } from '@regiondev/vue-components/lib/theme'

  const themes = ref<TwTheme[]>([{ name: 'primary', color: 'violet' }])
</script>

<template>
  <RThemeProvider :themes="themes">
    <router-view />
  </RThemeProvider>
</template>

<style scoped></style>
