<script lang="ts" setup>
import Bubbles from '../../bgPatterns/Bubbles.vue'
import { smoothScrollToHash } from '@regiondev/vue-utils'
import LandingHeader from '../../header/LandingHeader.vue'
import SeparatorSvg from '../SeparatorSvg.vue'
import {useType} from './type.jsx'

const {TypeWrite} = useType(
    [
      'RegionDev is a creative team with a lot of experience in software development.',
      'We build web and desktop applications, mobile apps, bots and much more.',
      'Just contact us if you have a project idea.',
    ],
    1000,
    {speed: 120}
)
</script>
<template>
  <LandingHeader/>
  <div
      class="md:pt-50 pt-40 from-white to-primary-100/50 dark:(from-slate-900 to-primary-900) bg-gradient-to-b overflow-hidden relative"
  >
    <Bubbles/>

    <div
        class="backdrop-filter absolute w-full h-full left-0 top-0 bg-white/10 dark:bg-transparent !blur !backdrop-blur-3xl z-1"
    ></div>

    <div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
      <div
          class="flex z-10 flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0"
      >
        <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="my-4 min-h-30 text-4xl md:text-5xl font-bold leading-tight text-darken"
        >
          <span
              class="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-800 dark:(from-primary-400 to-indigo-500)"
          >
            Develop Software
          </span>
          has never been more easier
        </h1>
        <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="leading-normal text-3xl mb-8 min-h-50 md:(min-h-30 mt-0) mt-8"
        >
          <TypeWrite/>
        </p>
        <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
        >
          <RButton
              rounded
              color="primary"
              type="filled"
              class="bg-gradient-to-r from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 text-xl font-bold px-10 !py-7 transform transition hover:scale-110 duration-300 ease-in-out"
              @click="smoothScrollToHash('contact')"
          >
            Contact Us
          </RButton>
          <div
              class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
          >
            <RButton
                class="bg-white dark:bg-slate-900 w-14 h-14 rounded-full flex items-center justify-center"
            >
              <i-ph-play-fill class="text-sky-400"/>
            </RButton>
            <span class="cursor-pointer">Watch how we work</span>
          </div>
        </div>
      </div>
      <!--Right Col-->
      <div id="girl" class="z-10 w-full lg:w-6/12 lg:-mt-10 relative">
        <div class="md:(min-h-600px min-w-300px) min-h-500px">
          <RImageBlurLoader
              src="/img/illustrations/main-section.png"
              bigImageClass="floating w-550px mx-auto 2xl:-mb-20 2xl:ml-30"
              smallImageClass="!w-550px mx-auto 2xl:-mb-20 2xl:ml-30"
              smallSrc="/img/illustrations/main-section~1.png"
          />
        </div>
      </div>
    </div>

    <SeparatorSvg/>
  </div>
</template>
<style lang="scss" scoped></style>
