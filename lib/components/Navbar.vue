<script lang="ts" setup>
  import { ss } from '@regiondev/vue-hooks'
  import { useLayoutStore } from '../stores/layout.store'

  const items = [
    { text: 'Action 1', cb: () => console.log('Edit') },
    { text: 'Action 2', cb: () => console.log('Duplicate') },
    { separator: true },
    { text: 'Action 3', cb: () => console.log('Archive') },
    { text: 'Action 4', cb: () => console.log('Move') },
  ]

  const { toggleShowSidebarDrawer } = useLayoutStore()
</script>
<template>
  <nav
    ref="container"
    class="bg-slate-800 fixed w-full shadow border-b-solid border-slate-700 border-1 px-1 md:px-4"
  >
    <div class="">
      <div class="flex flex-wrap p-2 px-4 flex-row items-center">
        <span
          v-if="ss.lmd"
          class="text-white cursor-pointer text-2xl ml-6 mr-6 i-heroicons-outline:menu"
          @click="() => toggleShowSidebarDrawer()"
        ></span>
        <a class="flex title-font font-medium items-center text-white md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span class="ml-3 text-xl">TransO</span>
        </a>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped></style>
