<script lang="ts" setup>
  import { techs } from './techs'
  import { useDraggableSlider } from '@regiondev/vue-hooks'
  import TechCard from './TechCard.vue'

  const { sliderRef } = useDraggableSlider()

  const bg = `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e") !important;`
  const bg2 = `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e") !important;`

  const style = computed(() => {
    return true ? bg2 : bg
  })
</script>
<template>
  <div class="relative from-white" :style="style">
    <div class="container px-4 py-34 lg:px-8 mx-auto max-w-screen-xl">
      <h1
        data-aos="flip-down"
        data-aos-once="true"
        class="text-4xl font-bold dark:text-white text-slate-800 text-center"
      >
        What tech we use?
      </h1>
      <p data-aos="flip-down" class="text-muted text-center text-2xl max-w-screen-lg m-auto">
        Worried about technologies that are already becoming obsolete? No problem, we use the latest
        technologies and frameworks!
      </p>

      <div class="relative">
        <div
          class="absolute bg-gradient-to-r dark:from-slate-900 flex from-white h-full inset-x-0 justify-center left-0 pl-18 pointer-events-none top-0 w-50px z-100"
        ></div
        ><div
          class="absolute bg-gradient-to-l dark:from-slate-900 flex from-white h-full justify-center right-0 pr-8 pointer-events-none top-0 w-50px z-100"
        ></div>
        <div ref="sliderRef" class="items flex flex-row py-5 mt-20 relative">
          <TechCard
            v-for="(tech, i) in techs"
            :key="i"
            :image="tech.image"
            :imageClass="tech.imageClass"
            :title="tech.title"
            :url="tech.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .main {
    padding: 0;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .footer {
    padding: 0.6em;
  }

  .items {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    transform: scale(0.98);
    will-change: transform;
    user-select: none;
    cursor: pointer;
  }

  .items.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
</style>
