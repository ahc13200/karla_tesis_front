<script lang="ts" setup>
  import { useScroll } from '@vueuse/core'

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { y } = useScroll(window)
</script>
<template>
  <!-- Back to top button -->
  <RButton
    id="btn-back-to-top"
    color="primary"
    class="backdrop-blur-lg backdrop-filter transform transition-all duration-150 scale-0 fixed bottom-8 right-7 rounded-full bg-gradient-to-br from-primary-700 to-indigo-700 w-50px h-50px flex-center text-white opacity-80 hover:opacity-100 z-200"
    :class="{ '!scale-100 press': y > 800 }"
    w:dark="from-primary-700 to-indigo-700 hover:opacity-100 opacity-80"
    @click="toTop"
  >
  </RButton>
</template>
<style lang="scss" scoped></style>
