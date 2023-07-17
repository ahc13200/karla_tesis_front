<script lang="ts" setup>
  import CardItem from './CardItem.vue'
</script>
<template>
  <section id="about-us">
    <div class="py-28 relative">
      <div class="container lg:px-8 px-6 sm:px-8 mx-auto max-w-screen-xl">
        <div data-aos="flip-down" data-aos-once="true" class="text-center max-w-screen-md mx-auto">
          <h1 class="text-4xl font-bold mb-4 dark:text-white text-slate-800"> Who we are? </h1>
          <p class="text-muted text-2xl">
            We are a team specialized on the development of reliable and scalable software
            solutions. We work to create custom solutions that meet the expectations of our
            customers.
          </p>
        </div>
        <div
          class="mt-25 grid justify-center grid-cols-1 gap-y-30 gap-10 md:(grid-cols-2) lg:(grid-cols-3)"
        >
          <CardItem
            img="about-1.png"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-once="true"
            title="Fast development"
            description="Time is money, both you and we know it. We use our tools to simplify the development process and make it as fast as possible. No more wasted time on repetitive things, our task is to make you
have a fast software, but with quality and high security."
          />

          <CardItem
            img="about-2.png"
            isWhite
            data-aos="zoom-in-up"
            data-aos-once="true"
            data-aos-delay="500"
            title="Better security"
            description="The security is one of our priorities. Our applications protects data and sensible information against malicious attacks. We use data encryption, data masking, row level security, server side rate limit and many other techniques to avoid security breaches, data leaks, and financial issues."
          />
          <CardItem
            img="about-3.png"
            data-aos="zoom-in-up"
            data-aos-once="true"
            data-aos-delay="700"
            title="Better experience"
            description="User experience and satisfaction is always something difficult to achieve. We work hard to create the exact layouts, easy and understandable for most users, identifying and removing pain points within the app. All of that make our software unique and user-friendly and meet our customers' expectations."
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
