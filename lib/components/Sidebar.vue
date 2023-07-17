<script lang="ts" setup>
  const sections = [
    {
      items: [
        { key: 'dashboard', text: 'Panel de Administración', icon: 'i-heroicons-outline:home' },
        { key: 'team', text: 'Trabajadores', icon: 'i-heroicons-outline:users' },
        { key: 'projects', text: 'Mapa', icon: 'i-heroicons-outline:map-pin' },
        { key: 'calendar', text: 'Calendar', icon: 'i-heroicons-outline:calendar' },
      ],
    },
  ] as any
  const activeKey = ref('dashboard')
</script>
<template>
  <div
    class="left-0 p-2 w-70 h-100vh bg-slate-800 top-14 border-r-solid border-r-1 border-slate-700 fixed flex"
  >
    <RVerticalMenu
      v-model:active="activeKey"
      class="w-80 !border-none"
      item-class=""
      :sections="sections"
    />
  </div>
</template>
<style lang="scss" scoped></style>
