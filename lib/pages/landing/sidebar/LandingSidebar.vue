<script lang="ts" setup>
  
  import AppLogo from '../header/AppLogo.vue'
  import { smoothScrollToHash as smoothScroll } from "@regiondev/vue-utils";
  import {RAntDrawer} from "@regiondev/vue-components/lib";
  function smoothScrollToHash(id) {
    smoothScroll(id)
  }
</script>
<template>
  <RAntDrawer
    class="landing-drawer"
    :title="null"
    :width="280"
    placement="right"
    :closable="false"
    bodyClass="!p-0 !h-full overflow-x-hidden"
    containerClass="!bg-slate-900/10"
  >
    <div class="p-5 flex flex-col h-full space-y-3">
      <div class="relative w-200px h-50px">
        <AppLogo
          hideText
          class="md:(!w-101px !-left-35px !-top-5px) transition-all duration-300 -left-30px -top-4px absolute w-101px text-primary-600 dark:text-primary-600"
        />
        <h1
          class="transition-all duration-300 mb-0 mt-3 left-45px font-bold text-4xl top-3px absolute w-250px text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-900 dark:(from-primary-500 to-indigo-500)"
        >
          RegionDev
        </h1>
      </div>
      <div class="flex flex-col space-y-9 !mt-15">
        <a
          href="#contact"
          class="link-hoverable text-slate-600 dark:text-slate-200 text-lg font-bold py-2 text-md bg-transparent rounded-lg md:ml-4 focus:outline-none focus:shadow-outline"
          @click.stop.prevent="smoothScrollToHash('contact')"
        >
          Contact
        </a>
        <a
          href="about-us"
          class="link-hoverable text-slate-600 dark:text-slate-200 text-lg font-bold py-2 text-md bg-transparent rounded-lg md:ml-4 focus:outline-none focus:shadow-outline"
          @click.stop.prevent="smoothScrollToHash('about-us')"
        >
          About Us
        </a>
        <router-link
          :to="{ name: '' }"
          class="link-hoverable text-slate-600 dark:text-slate-200 text-lg font-bold py-2 text-md bg-transparent rounded-lg md:ml-4 focus:outline-none focus:shadow-outline"
        >
          Docs for developers
        </router-link>

        <router-link to="/login" class="navbar-link">
          <RButton
            circle
            color="primary"
            type="filled"
            class="bg-gradient-to-r from-primary-500 to-indigo-600 px-10"
          >
            Login
          </RButton>
        </router-link>
      </div>
      <div class="h-full flex">
        <div class="mt-auto ml-auto">
          <i-heroicons-outline-translate class="text-xl" />
        </div>
      </div>
    </div>
  </RAntDrawer>
</template>
<style lang="scss">
  .landing-drawer {
    .ant-drawer-content {
      @apply backdrop-filter backdrop-blur-md bg-white/80 dark:bg-slate-900/80 #{!important};
    }
  }
</style>
