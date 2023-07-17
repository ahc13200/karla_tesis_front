<script lang="ts" setup></script>
<template>
  <div class="card w-160px !p-3 backdrop-filter backdrop-blur-sm dark:backdrop-blur-md">
    <div
      class="relative rounded-2xl h-130px w-full transition-all duration-300 overflow-hidden group hover:(!rounded-bl-4xl rounded-tr-4xl)"
    >
      <img
        src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
        alt=""
        class="transform transition-all duration-300 w-full h-full object-cover group-hover:(scale-120)"
      />
      <div
        class="w-40px absolute cursor-pointer bottom-5px right-5px flex-center shadow-lg rounded-full h-40px bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800"
      >
        <i-mdi-camera-plus class="text-sky-600 dark:text-sky-400 text-lg" />
      </div>
    </div>
    <div class="ml-2 mb-1">
      <h5 class="mb-1 font-extrabold text-lg mt-2">Hugh Scott</h5>
      <span class="text-sky-600 dark:text-sky-400 text-14px flex items-center">
        <span class="bg-sky-600 flex w-7px h-7px rounded-full mr-2"></span> Designer
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
