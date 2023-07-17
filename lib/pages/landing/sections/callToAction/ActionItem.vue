<script lang="ts" setup>
  import { pt } from '@regiondev/vue-utils'

  const props = defineProps({
    img: pt.string.isRequired,
    title: pt.string.isRequired,
    description: pt.string.isRequired,
  })
</script>
<template>
  <div class="">
    <div class="flexR">
      <img class="inline-flex mt-1 mb-auto" :src="img" />
      <div class="ml-7 flexC">
        <h3 class="text-xl font-bold main-color">{{ title }}</h3>
        <p style="line-height: 1.4" class="text-gray-600 text-16px">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
