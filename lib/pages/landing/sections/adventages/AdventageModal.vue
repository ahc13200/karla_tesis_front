<script lang="ts" setup>
import {useVModel} from '@vueuse/core'
import {pt} from '@regiondev/vue-utils'

const props = defineProps({
  visible: pt.bool.def(false),
  isLast: pt.bool.def(false),
  isFirst: pt.bool.def(false),
  title: pt.string,
  desc: pt.string,
  img: pt.string,
})

const emit = defineEmits(['prev', 'next'])
const visible = useVModel(props, 'visible')

function close() {
  visible.value = false
}
</script>
<template>
  <RAntModal
      v-model:visible="visible"
      :showCloseIcon="false"
      containerClass="dark:(from-primary-900/30) bg-gradient-to-br from-primary-500/30"
  >
    <div class="flex min-h-400px flex-col items-center justify-center text-center px-18 relative">
      <RImageBlurLoader
          :src="`/img/3d/${img}.png`"
          :smallSrc="`/img/3d/${img}~1.png`"
          class="w-150px"
          blur="10px"
      />

      <!-- <img class="transition delay-75 animate-fade-in w-150px" :src="`/img/3d/${img}.png`" /> -->
      <h1 class="dark:text-white text-slate-900">{{ title }}</h1>
      <p class="text-slate-800 dark:text-slate-400 text-lg mt-5" style="line-height: 25px">
        {{ desc }}
      </p>
    </div>

    <div v-if="!isLast" class="absolute" style="top: 50%; right: 18px; transform: translateY(-50%)">
      <RButton
          class="px-0 w-33px h-33px"
          circle
          :color="$theme.dark ? 'neutro' : 'primary'"
          @click="$emit('next')"
      >
        <i-heroicons-solid-chevron-right class="text-17px"/>
      </RButton>
    </div>

    <div v-if="!isFirst" class="absolute" style="top: 50%; left: 18px; transform: translateY(-50%)">
      <RButton
          class="px-0 w-33px h-33px"
          circle
          :color="$theme.dark ? 'neutro' : 'primary'"
          @click="$emit('prev')"
      >
        <i-heroicons-solid-chevron-left class="text-17px"/>
      </RButton>
    </div>

    <template #footer>
      <div class="p-5 text-center">
        <RButton size="l" shadow class="px-20 !text-lg py-6" color="primary" @click="close">
          I got it 🚀
        </RButton>
      </div>
    </template>
  </RAntModal>
</template>
<style lang="scss" scoped></style>
