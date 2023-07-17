<script lang="ts" setup>
  import { pt } from '@regiondev/vue-utils'

  const props = defineProps({
    image: pt.string,
    title: pt.string,
    url: pt.string,
    imageClass: pt.string,
  })
</script>
<template>
  <div
    data-aos="flip-left"
    w:not-last="mr-10"
    w:dark="!bg-opacity-20"
    class="!bg-white dark:(!bg-slate-800 from-primary-700/80 via-indigo-900/40 to-slate-800) from-indigo-100 bg-gradient-to-br !shadow-md flex flex-col min-w-220px min-h-220px items-center justify-center card backdrop-blur-md backdrop-filter"
  >
    <img
      :class="[imageClass]"
      width="100"
      style="transform: translateX(-2px)"
      class="w-100px h-100px max-w-60px max-h-60px u-cover"
      :src="image"
      alt=""
    />
    <h2 class="dark:text-white mt-10">{{ title }}</h2>
    <a :href="url" target="_blank" class="dark:text-primary-400">{{ url }}</a>
  </div>
</template>
<style lang="scss" scoped></style>
