<script lang="ts" setup>
  import ActionItem from './ActionItem.vue'
</script>
<template>
  <section class="about-area2 section-padding">
    <div class="container px-7 max-w-1200px">
      <div class="flex justify-between">
        <div style="height: fit-content" class="relative max-w-5/12">
          <div class="w-full about-img">
            <img src="/img/services/call.jpg" />
          </div>
          <div class="absolute flex items-center bg-white ratting-point">
            <div class="features-ratting">
              <img src="/img/services/notification1.svg" />
            </div>
            <div class="features-caption">
              <h3>New Features</h3>
              <p>You have received notification</p>
            </div>
          </div>
        </div>
        <div class="max-w-2/5">
          <div class="h-full flexC about-caption">
            <div class="mb-10 section-tittle">
              <h2 class="!text-5xl main-color font-bold">Grow your<br />business fast.</h2>
            </div>
            <ActionItem
              class="mb-7"
              img="/img/services/notification1.svg"
              description="Naxly bring the power of data science and artificial intelligence."
              title="Engage Teammates"
            />
            <ActionItem
              img="/img/services/notification1.svg"
              description="Naxly bring the power of data science and artificial intelligence."
              title="Engage Teammates"
            />

            <a class="px-8 py-3.5 mt-auto font-bold text-white rounded-full w-max btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .about-area2 {
    padding-top: 120px;
    padding-bottom: 100px;
    background: #f6f9fc;
  }
  .about-area2 .about-img img {
    box-shadow: 0px 20px 30px rgb(35 47 85 / 10%);
  }
  .ratting-point {
    flex-wrap: wrap;
    box-shadow: 0px 20px 30px rgb(0 0 0 / 6%);
    border-radius: 7px;
    padding: 20px 20px;
    bottom: 31%;
    z-index: 1;
    right: -26%;
  }
  .ratting-point .features-caption {
    padding-left: 19px;
  }
  .ratting-point .features-caption h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .ratting-point .features-caption p {
    font-size: 16px;
    line-height: 1.2;
    color: #6f7781;
    margin-bottom: 0;
  }

  .btn {
    background: linear-gradient(to bottom, #ff4495 0%, #ff6d6d 100%);
  }
</style>
