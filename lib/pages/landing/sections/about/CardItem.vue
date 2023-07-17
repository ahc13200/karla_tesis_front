<script lang="ts" setup>
  import { pt } from '@regiondev/vue-utils'
  import { RImageBlurLoader as BlurLoader} from '@regiondev/vue-components/lib'

  const props = defineProps({
    img: pt.string,
    title: pt.string,
    description: pt.string,
    isWhite: pt.bool.def(false),
  })
</script>
<template>
  <div class="relative w-full">
    <div
      class="card !overflow-visible !px-10 h-full !bg-opacity-50 bg-gradient-to-br !backdrop-blur-lg backdrop-filter !shadow-lg"
      :class="{
        '!bg-white dark:(!bg-slate-800)': isWhite,
        'from-primary-500 to-indigo-600 dark:( from-primary-800 to-indigo-900)': !isWhite,
      }"
    >
      <div class="-mt-45px flex items-center flex-col justify-center">
        <BlurLoader
          :src="`/img/illustrations/${img}`"
          bigImageClass="w-237px max-w-237px h-264px max-h-264px"
          smallImageClass="w-full max-h-300px py-10"
          class="min-h-250px w-full justify-center flex"
          :smallSrc="`/img/illustrations/small-${img}`"
          blur="50px"
        />
        <h2
          :class="{ 'text-white': !isWhite, 'text-primary-900 dark:text-white': isWhite }"
          class="mt-10 font-bold"
        >
          {{ title }}
        </h2>
        <p class="text-lg" :class="{ 'text-muted': isWhite, 'text-slate-300': !isWhite }">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
