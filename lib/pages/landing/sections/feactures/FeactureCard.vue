<script lang="ts" setup>
  import { pt } from '@regiondev/vue-utils'

  const props = defineProps({
    title: pt.string,
    desc: pt.string,
    iconClass: pt.string,
    icon: pt.object,
  })
</script>
<template>
  <div
    w:hover="!shadow-2xl"
    class="card !shadow-xl dark:(!bg-opacity-60) z-10 backdrop-filter backdrop-blur-md md:!min-w-450px !min-h-100px flex items-start !absolute transform"
  >
    <component :is="icon" class="min-w-60px min-h-60px flex h-auto" :class="[iconClass]" />
    <div class="ml-3 flex flex-col" data-aos="flip-up" data-aos-once="true">
      <h2 class="text-xl font-bold dark:text-white">{{ title }}</h2>
      <p class="mb-0 text-muted"> {{ desc }} </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  p {
    line-height: 20px !important;
    font-size: 15px !important;
  }
</style>
