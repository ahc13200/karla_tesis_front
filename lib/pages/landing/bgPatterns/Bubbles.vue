<script lang="ts" setup>
import { pt } from '@regiondev/vue-utils'
  const props = defineProps({
    circle1Color: pt.string.def('#19c59191'),
    circle2Color: pt.string.def('#6365f1d3'),
  })
  const { circle1Color, circle2Color } = toRefs(props)
</script>
<template>
  <div class="absolute top-0 left-0 right-0">
    <div class="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-40">
      <div class="mix-blend-multiply absolute w-700px h-900px rounded-[40rem] circle-obj"> </div>
    </div>
    <div class="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-102">
      <div class="mix-blend-multiply absolute w-600px h-600px rounded-[40rem] circle-obj2"> </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .circle-obj {
    background: radial-gradient(closest-side, v-bind(circle1Color), rgba(233, 168, 2, 0));
    animation: traverse-up-left 10s ease-in-out infinite alternate;
    z-index: -1;
  }
  .circle-obj2 {
    background: radial-gradient(closest-side, v-bind(circle2Color), rgba(233, 168, 2, 0));
    animation: traverse-up-right 12s ease-in-out infinite alternate;
    z-index: -1;
  }
  html.dark {
    .circle-obj {
      background: radial-gradient(closest-side, v-bind(circle1Color), rgba(233, 168, 2, 0));
    }
  }

  @keyframes traverse-up-left {
    to {
      transform: translateY(-200px) translateX(-350px) rotate(180deg);
    }
  }

  @keyframes traverse-up-right {
    to {
      transform: translateY(-300px) translateX(300px) rotate(1turn);
    }
  }
</style>
