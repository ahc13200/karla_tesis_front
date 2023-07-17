<script lang="ts" setup>
  import { useToggle } from '@vueuse/core'
  import { useScreen } from '@regiondev/vue-hooks'
  import AdventageItem from './AdventageItem.vue'
  import AdventageModal from './AdventageModal.vue'
  import { items } from './items'

  const selectedItem = ref()
  const selectedIndex = ref(0)
  const [showModal, toggleModal] = useToggle()

  function setSelected(item, index) {
    selectedItem.value = item
    selectedIndex.value = index
    if (!showModal.value) {
      toggleModal(true)
    }
  }
  function prev() {
    const newIndex = selectedIndex.value == 0 ? 0 : selectedIndex.value - 1
    setSelected(items[newIndex], newIndex)
  }
  function next() {
    const newIndex =
      selectedIndex.value === items.length - 1 ? items.length - 1 : selectedIndex.value + 1
    setSelected(items[newIndex], newIndex)
  }

  const seeMore = ref(false)

  const ss = useScreen()

  const allItems = computed(() => {
    if (ss.value.lmd) {
      return seeMore.value ? items : items.slice(0, 6)
    }
    return items
  })
</script>
<template>
  <div
    w:dark="from-slate-900 to-primary-900/20"
    class="relative from-white to-primary-200/30 bg-gradient-to-b overflow-hidden"
  >
    <div
      class="absolute w-full h-full bg-gradient-to-br left-0 bg-opacity-50 top-0 from-primary-100/50 to-indigo-200 z-10"
      w:dark="from-slate-900 via-primary-900/60 to-slate-900 z-1"
    ></div>

    <div class="absolute w-full h-full left-0 top-0 z-2 bg-white/30" w:dark="bg-slate-900/60"></div>

    <div
      class="backdrop-filter absolute w-full h-full left-0 top-0 bg-white/30 dark:bg-transparent !blur !backdrop-blur-3xl z-10"
    ></div>
    <div
      class="backdrop-filter backdrop-blur-sm absolute rounded-full z-1 bottom-1/3 left-2/3 bg-indigo-900 dark:bg-primary-600/40 w-250 h-35 transform -rotate-45"
    >
    </div>
    <div
      class="backdrop-filter backdrop-blur-sm absolute rounded-full z-1 top-1/2 right-1/2 bg-green-500/60 dark:bg-pink-800/40 w-400 h-35 transform -rotate-45"
    >
    </div>
    <div class="container py-28 lg:px-8 px-6 sm:px-8 mx-auto max-w-screen-xl relative z-10">
      <h1
        data-aos="zoom-in-left"
        data-aos-once="true"
        class="font-bold dark:text-white text-slate-800 text-center"
      >
        Wait, do you need someone of this feactures? We offer all of them!
      </h1>

      <div
        data-aos="zoom-in-left"
        data-aos-once="true"
        class="relative grid mt-20 gap-10 grid-cols-1 md:(grid-cols-2) lg:(grid-cols-3) xl:(grid-cols-4)"
      >
        <AdventageItem
          v-for="(item, i) in allItems"
          :key="i"
          :title="item.title"
          :img="item.img"
          @click="setSelected(item, i)"
        />

        <div v-if="!seeMore && ss.lmd" class="w-full justify-center flex">
          <RButton shadow color="neutro" @click="seeMore = true"> See more </RButton>
        </div>

        <AdventageModal
          v-model:visible="showModal"
          :title="selectedItem?.title"
          :desc="selectedItem?.desc"
          :img="selectedItem?.img"
          :isLast="selectedIndex === items.length - 1"
          :isFirst="selectedIndex === 0"
          @next="next"
          @prev="prev"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
