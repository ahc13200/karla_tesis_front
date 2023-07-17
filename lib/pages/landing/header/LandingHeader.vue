<script lang="ts" setup>
  import { useScroll } from '@vueuse/core'
  import { smoothScrollToHash } from '@regiondev/vue-utils'

  const open = ref(true)

  const { x, y } = useScroll(window)
</script>
<template>
  <div
    class="transition-all duration-200 fixed top-0 left-0 w-full z-1000 bg-transparent flex flex-row-reverse"
    :class="{
      'backdrop-filter backdrop-blur-xl dark:(bg-slate-900/80 shadow-lg shadow-primary-900/7) bg-white/50 shadow':
        y > 10,
    }"
  >
    <div class="px-4 sm:px-8 flex flex-row-reverse w-full mx-auto">
      <div class="flex max-w-screen-xl w-full mx-auto md:(items-center justify-between flex-row)">
        <div
          :class="{ 'py-3': y < 10, 'py-2': y > 10 }"
          class="transition-all duration-300 flex flex-row items-center justify-between z-10"
        >
          <div class="relative transition-all duration-300" :class="{ 'mt-4': y < 10 }">
            <div class="relative w-200px h-50px cursor-pointer">
              <router-link to="/">
<!--                <AppLogo-->
<!--                  hideText-->
<!--                  :class="{-->
<!--                    'md:!-top-10px': y > 10,-->
<!--                    '!-top-10px': y > 10,-->
<!--                  }"-->
<!--                  class="md:(!w-101px !-left-35px !-top-5px) transition-all duration-300 -left-30px -top-4px absolute w-101px text-primary-600 dark:text-primary-600"-->
<!--                />-->
                <h1
                  :class="{ '!mt-1': y > 10 }"
                  class="transition-all duration-300 mb-0 mt-3 left-45px font-bold text-4xl top-3px absolute w-250px text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-900 dark:(from-primary-500 to-indigo-500)"
                >
                  RegionDev
                </h1>
              </router-link>
            </div>
          </div>
        </div>
        <nav
          :class="{ 'transform md:transform-none': !open, 'h-full': open, 'mt-8': y < 10 }"
          class="navbar-nav h-0 z-10 md:h-auto flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 scale-y-0"
        >
          <a
            href="#contact"
            class="link-hoverable text-slate-600 dark:text-slate-200 text-lg font-bold px-4 py-2 text-md bg-transparent rounded-lg md:ml-4 focus:outline-none focus:shadow-outline"
            @click.stop.prevent="smoothScrollToHash('contact')"
          >
            Contact
          </a>
          <a
            href="about-us"
            class="link-hoverable text-slate-600 dark:text-slate-200 text-lg font-bold px-4 py-2 text-md bg-transparent rounded-lg md:ml-4 focus:outline-none focus:shadow-outline"
            @click.stop.prevent="smoothScrollToHash('about-us')"
          >
            About Us
          </a>
          <router-link
            :to="{ name: '' }"
            class="link-hoverable mr-10 text-slate-600 dark:text-slate-200 text-lg font-bold px-4 py-2 text-md bg-transparent rounded-lg md:ml-4 focus:outline-none focus:shadow-outline"
          >
            Docs for developers
          </router-link>

          <router-link to="/login" class="navbar-link">
            <RButton
              rounded
              color="primary"
              type="filled"
              class="bg-gradient-to-r from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 py-2 md:ml-4 px-10 md:(!py-6 !text-lg !font-medium)"
            >
              Login
            </RButton>
          </router-link>
        </nav>

        <div
          class="h-full flex items-center lg:hidden transition-all duration-300 mr-2 md:mr-0"
          :class="{ 'mt-4': y < 10 }"
          @click="$theme.layout.landingSidebarOpen = true"
        >
          <i-heroicons-outline-menu class="text-2xl" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .navbar-nav > a {
    @apply hidden lg:flex;
  }
  .link-hoverable {
    @apply hover:text-primary-700 dark:hover:text-primary-500;
    position: relative;
    text-decoration: none;
    &::before {
      @apply from-primary-500 to-indigo-600 bg-gradient-to-r;
      //   bg-primary-700 dark:bg-primary-500
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
</style>
