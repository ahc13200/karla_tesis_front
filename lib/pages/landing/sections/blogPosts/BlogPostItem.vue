<script lang="ts" setup>
  import { pt } from '@regiondev/vue-utils'

  interface BlogPostItem {
    title: string
    img: string
  }

  const props = defineProps({
    item: pt.objectOf<BlogPostItem>().def({}),
  })
</script>
<template>
  <div class="blog-post-item">
    <div class="relative round overflow-hidden imageItem">
      <img
        class="absolute top-0 left-0 w-full h-full round transition-all duration-600"
        :src="item.img"
        alt=""
      />
      <div class="location-details text-center">
        <span class="location-btn"></span>
        <h4>RegionDev</h4>
        <p>blog</p>
        <img src="./IT-Solution_files/icon1.svg" alt="" />
      </div>
    </div>

    <h1 class="mt-8 font-bold main-color">The security risk of Changing local packages</h1>
  </div>
</template>
<style lang="scss" scoped>
  .imageItem {
    .location-details {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      text-align: center;
      margin: 0 auto;
      z-index: 2;
      transition: all 0.4s ease-out 0s;

      p {
        color: #fff;
        font-size: 8px;
        font-weight: normal;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin: 0;
        line-height: 1;
      }
      h4 {
        color: #fff;
        font-size: 27px;
        font-weight: 700;
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin: 0;
        line-height: 1;
        margin-top: 8px;
      }

      .location-btn {
        width: 23px;
        height: 23px;
        background: #fff;
        color: #fff;
        border-radius: 30px;
        display: block;
        text-align: center;
        margin: 0 auto;
        transition: all 0.4s ease-out 0s;
      }
    }

    padding-bottom: 80%;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;

    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      content: '';
      background: rgba(0, 9, 94, 0.4);
      z-index: 1;
      transition: all 0.4s ease-out 0s;
    }
  }
  .blog-post-item {
    cursor: pointer;
    &:hover {
      .imageItem {
        &::before {
          background: rgba(255, 68, 149, 0.7);
        }
        img {
          transform: scale(1.05);
        }
      }
    }
  }
</style>
