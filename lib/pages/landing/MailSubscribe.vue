<script lang="ts" setup></script>
<template>
  <div class="bg-white dark:bg-slate-900" data-aos-once="true" data-aos="zoom-in-up">
    <main>
      <!-- CTA section -->
      <div class="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" class="hidden sm:block">
          <svg
            class="absolute top-8 left-1/6 -ml-3"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200 dark:text-slate-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div class="mx-auto max-w-xl px-6 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div
            w:dark="!bg-opacity-30 backdrop-filter backdrop-blur-md"
            class="relative rounded-2xl px-6 py-10 bg-primary-500 dark:bg-primary-800 overflow-hidden shadow-xl sm:px-12 sm:py-20"
          >
            <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                class="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  class="text-primary-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  class="text-primary-600 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div class="relative">
              <div class="sm:text-center">
                <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Get notified of all our updates.
                </h2>
                <p class="mt-6 mx-auto max-w-2xl text-lg text-primary-100">
                  We update periodically our feactures and our blog. Stay updated on our services!
                </p>
              </div>
              <div class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div class="min-w-0 flex-1">
                  <label for="cta-email" class="sr-only">Email address</label>
                  <input
                    id="cta-email"
                    type="email"
                    w:dark="bg-slate-300 hover:(bg-slate-200) "
                    class="block w-full border border-transparent rounded-md px-5 py-2.8 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">
                  <RButton color="secondary" type="filled" size="xl" class="px-10 !text-lg">
                    Notify me
                  </RButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped></style>
