<script lang="ts" setup>
  import FeactureCard from './FeactureCard.vue'
  import Bubbles from '../../bgPatterns/Bubbles.vue'
  import SeparatorSvg from '../SeparatorSvg.vue'
  import { feactures1, feactures2 } from './feactures'
</script>
<template>
  <div
    class="bg-gradient-to-b relative from-white to-primary-100/50 dark:(from-slate-900 to-primary-900/80)"
  >
    <Bubbles />

    <div class="container px-6 py-24 lg:px-8 mx-auto max-w-screen-xl">
      <h1 class="text-4xl font-bold dark:text-white text-slate-800 text-center">
        Better Website Means A Better User Experience
      </h1>

      <div
        class="grid-cols-1 grid sm:(grid-cols-2 gap-10 px-2) lg:px-0 lg:(!grid-cols-4) mt-25 h-fit-content min-h-400px"
      >
        <div class="flex flex-col relative">
          <FeactureCard
            v-for="(feacture, i) in feactures1"
            :key="i"
            :title="feacture.title"
            :desc="feacture.desc"
            :style="feacture.style "
            :class="feacture.classes"
            :icon="feacture.icon"
            :iconClass="feacture.iconClass"
          />
        </div>
        <div class="col-span-2 hidden lg:flex justify-center">
          <RImageBlurLoader
            src="/img/illustrations/feactures.png"
            bigImageClass="attachment-full size-full w-555px h-581px"
            class="w-555px h-581px"
            smallImageClass=""
            smallSrc="/img/illustrations/small-feactures.png"
          />
        </div>
        <div class="col flex flex-col relative">
          <FeactureCard
            v-for="(feacture, i) in feactures2"
            :key="i"
            :title="feacture.title"
            :desc="feacture.desc"
            :icon="feacture.icon"
            :style="feacture.style"
            :class="feacture.classes "
            :iconClass="feacture.iconClass"
          />
        </div>
      </div>
    </div>
    <SeparatorSvg />
  </div>
</template>
<style lang="scss" scoped></style>
