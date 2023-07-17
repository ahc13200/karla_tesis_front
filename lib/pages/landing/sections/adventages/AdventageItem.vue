<script lang="ts" setup>
  import { pt } from '@regiondev/vue-utils'

  const props = defineProps({
    title: pt.string,
    img: pt.string,
  })
</script>
<template>
  <div
    w:dark:hover="!shadow-primary-900/60"
    w:hover="!scale-105 !shadow-xl !shadow-primary-900/20"
    w:dark="!bg-opacity-20 !bg-slate-800 from-primary-700/80 via-indigo-900/40 to-slate-800"
    class="cursor-pointer group transform !overflow-visible transition-all duration-75 card flex items-center justify-start !pl-15 md:(!pl-0 justify-center) from-indigo-200 to-white bg-gradient-to-br !shadow-md"
  >
    <RImageBlurLoader
      :src="`/img/3d/${img}.png`"
      :smallSrc="`/img/3d/${img}~1.png`"
      bigImageClass="transition-all !duration-200  group-hover:(transform scale-140 -rotate-5) "
      class="!min-w-100px !h-100px"
      blur="10px"
    />
    <h4 class="text-xl text-center dark:text-white/70 ml-4 font-bold text-slate-900/80">
      {{ title }}
    </h4>
  </div>
</template>
<style lang="scss" scoped></style>
