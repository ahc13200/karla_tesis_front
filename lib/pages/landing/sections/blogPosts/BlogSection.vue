<script lang="ts" setup>
  import BlogPostItem from './BlogPostItem.vue'

  const items = ref([
    { title: 'The Security Risks of Changing Package Owners', img: '/img/posts/1.jpg' },
    { title: 'The Security Risks of Changing Package Owners', img: '/img/posts/2.jpg' },
    { title: 'The Security Risks of Changing Package Owners', img: '/img/posts/3.jpg' },
  ])
</script>
<template>
  <div class="container px-7 py-25 max-w-1200px">
    <h1 class="font-bold w-full text-center text-5xl main-color">Some of our Great Stuff</h1>

    <div class="grid mt-15 gap-10 grid-cols-3">
      <BlogPostItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
