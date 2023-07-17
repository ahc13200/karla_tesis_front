<script lang="ts" setup>
  import { ss } from '@regiondev/vue-hooks'
  import { storeToRefs } from 'pinia'
  import Navbar from '../../components/Navbar.vue'
  import Sidebar from '../../components/Sidebar.vue'
  import { useLayoutStore } from '../../stores/layout.store'
  import Stats from './components/Stats.vue'
  import Map from './components/Map.vue'

  const images = ref([
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    'https://images.unsplash.com/photo-1647104441834-a06d63865c0a?w=200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    'https://images.unsplash.com/photo-1646541121625-e6675f5e88b1?w=200',
    'https://images.unsplash.com/photo-1647104441834-a06d63865c0a?w=200',
    'https://images.unsplash.com/photo-1638292857200-0fe110a2a4b0?w=200',
    'https://images.unsplash.com/photo-1647181322489-db4580f968af?w=100',
    'https://images.unsplash.com/photo-1646541121625-e6675f5e88b1?w=200',
  ])

  const { showSidebarDrawer } = storeToRefs(useLayoutStore())
</script>
<template>
  <Navbar />
  <Sidebar v-if="ss.md" />
  <RAntDrawer
    v-else
    v-model:visible="showSidebarDrawer"
    placement="left"
    :width="228"
    :closable="false"
  >
    <template #header></template>
    <Sidebar class="!border-none" />
  </RAntDrawer>
  <div :class="{ 'ml-70': ss.md }" class="p-10 pt-25">
    <Map />
  </div>
</template>
<style lang="scss" scoped></style>
