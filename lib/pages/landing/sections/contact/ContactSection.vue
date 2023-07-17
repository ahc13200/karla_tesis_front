<script lang="ts" setup>
  import { RImageBlurLoader as BlurLoader,} from '@regiondev/vue-components/lib'

  const contact = reactive({
    name: '',
    email: '',
    message: '',
  })
</script>
<template>
  <section id="contact">
    <div w:dark="bg-slate-900" class="relative bg-white overflow-hidden">
      <div
        class="container px-4 md:py-28 py-15 lg:px-8 px-8 sm:px-8 mx-auto max-w-screen-xl relative z-10"
      >
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 text-center">
            <BlurLoader
              src="/img/3d/mail-address.png"
              smallSrc="/img/3d/mail-address~1.png"
              class="w-200px md:w-300px m-auto mb-10 !opacity-90"
            />

            <!-- <img
              src="/img/3d/mail-address.png"
              data-aos="zoom-in-right"
              data-aos-once="true"
              class="w-200px md:w-300px m-auto mb-10 !opacity-90"
            /> -->
            <h1
              data-aos="zoom-in-right"
              data-aos-once="true"
              class="text-4xl font-bold dark:text-white text-slate-800 text-center"
            >
              Sounds like RegionDev might be the right choice for your business?
            </h1>

            <div
              class="m-auto my-10 h-1 w-40 bg-gradient-to-r from-primary-50 via-primary-600 to-primary-50 dark:(from-primary-900 to-primary-900 via-primary-400)"
            ></div>

            <p data-aos="zoom-in-right" data-aos-once="true" class="text-muted">
              Then send us your message about your requriments!
            </p>
          </div>

          <div class="lg:w-1/3 w-full sm:(w-2/3 mx-auto) mt-20 ml-auto relative">
            <div class="absolute h-full left-0 opacity-30 top-0 w-full"></div>
            <div
              data-aos="zoom-in-left"
              data-aos-once="true"
              w:dark="!bg-opacity-20 !bg-slate-800 from-primary-900/20 to-slate-800/40"
              class="card !bg-opacity-50 !p-10 bg-gradient-to-br from-indigo-100 bg-gradient-to-br !shadow-md"
            >
              <RInput v-model="contact.name" label="Your Name" class="py-3" />
              <RInput v-model="contact.email" label="Your Email" class="py-3" />
              <RInput
                v-model="contact.message"
                textarea
                label="Message"
                :min-rows="10"
                class="py-3"
              />

              <RButton block color="secondary" type="filled" size="xl" class="px-10 !text-lg">
                Contact us
              </RButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
