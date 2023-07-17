<script lang="ts" setup>
import MainSection from './sections/main/MainSection.vue'
import AboutSection from './sections/about/AboutSection.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MainFooter from './footer/MainFooter.vue'
import BackToTopButton from './BackToTopButton.vue'
import FeacturesSection from './sections/feactures/FeacturesSection.vue'
import TechsSection from './sections/techs/TechsSection.vue'
import AdventagesSection from './sections/adventages/AdventagesSection.vue'
import MailSubscribe from './MailSubscribe.vue'
import ContactSection from './sections/contact/ContactSection.vue'
import LandingSidebar from './sidebar/LandingSidebar.vue'

onMounted(() => {
    if (document.body.classList.contains('bg-main')) {
      document.body.classList.remove('bg-main')
      document.body.classList.remove('dark')
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  })

  onMounted(() => {
    AOS.init()
  })
</script>
<template>
  <!-- <LandingPage2 /> -->
  <BackToTopButton />
  <MainSection />

  <div class="text-gray-700 overflow-x-hidden landing-container">
    <AboutSection />
    <FeacturesSection />
    <TechsSection />
    <AdventagesSection />
    <ContactSection />
  </div>
  <MailSubscribe />
  <main-footer class="mt-32" :show-creator="false" />
</template>
<style lang="scss">
  .landing-container {
    .text-darken {
      color: #2f327d;
    }
    p {
      @apply text-xl;
    }
    h1 {
      @apply text-3xl md:text-4xl;
    }
  }
  .typewrite > .wrap {
    border-right: 0.08em solid rgba(0, 0, 0, 0.623);
  }
  html.dark {
    .typewrite > .wrap {
      border-right: 0.08em solid #fff;
    }
  }
</style>
