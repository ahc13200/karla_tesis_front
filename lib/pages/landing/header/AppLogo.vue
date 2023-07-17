<template>
  <div class="app-logo-icon" :class="{ hideText, hideIcon }" v-html="mainIconTextPrimary"> </div>
</template>

<script lang="ts">
  import { mainIconTextPrimary } from './logos'

  export default {
    components: {},
    props: {
      color: {
        type: String,
        default: 'primary',
      },
      size: {
        type: Number,
        default: 40,
      },
      hideText: {
        type: Boolean,
        default: false,
      },
      hideIcon: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      mainIconTextPrimary,
    }),
    computed: {},
    methods: {},
  }
</script>
<style lang="scss">
  .app-logo-icon {
    &.hideText {
      svg > g > g > g:first-child {
        display: none;
      }
    }
    &.hideIcon {
      svg > g > g > g:nth-child(2) {
        display: none;
      }
    }

    > svg > * {
      fill: currentColor;
    }
  }
</style>
