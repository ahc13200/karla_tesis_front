<script lang="ts" setup></script>
<template>
  <div
    class="absolute w-full h-full bg-gradient-to-br left-0 bg-opacity-50 top-0 from-primary-100/50 to-indigo-200 z-10"
    w:dark="from-slate-900 via-primary-900/50 to-slate-900 z-1"
  ></div>

  <div class="absolute w-full h-full left-0 top-0 z-2 bg-white/30" w:dark="bg-slate-900/60"></div>

  <div
    class="backdrop-filter absolute w-full h-full left-0 top-0 bg-white/30 dark:bg-transparent !blur !backdrop-blur-3xl z-30"
  ></div>

  <template v-if="!$slots.default">
    <div
      class="fixed backdrop-filter backdrop-blur-sm rounded-full z-20 top-1/2 right-1/2 bg-primary-200 dark:bg-pink-800/10 w-400 h-45 transform -rotate-45 blur"
    >
    </div>

    <div
      class="fixed backdrop-filter backdrop-blur-sm rounded-full z-20 bottom-1/3 left-2/3 bg-indigo-300 dark:bg-primary-800/10 w-250 h-55 transform -rotate-45"
    >
    </div>
  </template>
  <slot v-else></slot>

  <!-- <div
    class="backdrop-filter backdrop-blur-sm absolute rounded-full -z-8 inset-y-3/4 inset-x-3/4 bg-primary-400 dark:bg-rose-800/20 w-36 h-36"
  >
  </div> -->
</template>
<style lang="scss" scoped></style>
