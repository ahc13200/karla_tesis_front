<script lang="ts" setup>
  const email = ref('')
  const message = ref('')
  const name = ref('')

  function sendEmail() {
    console.log(name.value, message.value, email.value)
  }

  const selectedEmail = ref()

  const emails = [
    { text: 'asisten@asistur.cu', key: 'asisten' },
    { text: 'seguros@asistur.cu', key: 'seguro' },
  ]
</script>
<template>
  <div class="w-full">
    <h3 class="text-lg leading-6 font-bold text-white"> Last 30 days Hola</h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        class="relative bg-slate-700 card !p-7 pt-5 px-4 pb-8 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
      >
        <dt>
          <div class="absolute bg-primary-500 rounded-md p-3">
            <span class="h-6 w-6 text-slate-300 i-heroicons-outline-users"></span>
          </div>
          <p class="ml-16 mb-0 text-sm font-bold text-slate-300 truncate">Total Subscribers</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p class="text-2xl font-bold text-white"> 71,897 </p>
          <p class="ml-2 flex items-baseline text-sm font-bold text-green-600">
            <span
              class="self-center flex-shrink-0 h-5 w-5 text-green-500 i-heroicons-solid-arrow-sm-up"
            ></span>
            <span class="sr-only"> Increased by </span>
            122
          </p>
          <div class="absolute bottom-0 inset-x-0 bg-slate-800 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <RButton type="outline" color="primary">View all</RButton>
            </div>
          </div>
        </dd>
      </div>

      <div
        class="relative bg-slate-700 card !p-7 pt-5 px-4 pb-8 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
      >
        <dt>
          <div class="absolute bg-primary-500 rounded-md p-3">
            <span class="h-6 w-6 text-slate-300 i-heroicons-outline-mail-open"></span>
          </div>
          <p class="ml-16 mb-0 text-sm font-bold text-slate-300 truncate">Avg. Open Rate</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p class="text-2xl font-bold text-white"> 58.16% </p>
          <p class="ml-2 flex items-baseline text-sm font-bold text-green-600">
            <span
              class="self-center flex-shrink-0 h-5 w-5 text-green-500 i-heroicons-solid-arrow-sm-up"
            ></span>
            <span class="sr-only"> Increased by </span>
            5.4%
          </p>
          <div class="absolute bottom-0 inset-x-0 bg-slate-800 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <RButton type="outline" color="primary">View all</RButton>
            </div>
          </div>
        </dd>
      </div>

      <div
        class="relative bg-slate-700 card !p-7 pt-5 px-4 pb-8 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
      >
        <dt>
          <div class="absolute bg-primary-500 rounded-md p-3">
            <span class="h-6 w-6 text-slate-300 i-heroicons-outline-cursor-click"></span>
          </div>
          <p class="ml-16 mb-0 text-sm font-bold text-slate-300 truncate">Avg. Click Rate</p>
        </dt>
        <RInput v-model="name" class="w-full !text-primary-900 mb-5" label="Nombre completo" />
        <RInput v-model="email" class="w-full !text-primary-900 mb-5" label="Correo" />
        <RAntSelect
          v-model="selectedEmail"
          id-key="key"
          allowClear
          :items="emails"
          label="Correos de asistur"
        />
        <RInput
          v-model="message"
          class="w-full !text-primary-900 mb-5"
          label="Mensaje"
          textarea
          :minRows="10"
        />

        <RButton
          shadow
          class="!font-bold press outline-none border-none relative select-none overflow-hidden w-max group inline-flex items-center justify-center !outline-none ring-0 rounded-md transition-all duration-100 xl bg-secondary-500 active:!bg-secondary-600 text-white hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-500 dark:active:!bg-secondary-600 !w-full flex-center p-5 text-13px h-12 px-10 !text-lg"
          @click="sendEmail"
        >
          Enviar
        </RButton>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p class="text-2xl font-bold text-white"> 24.57% </p>
          <p class="ml-2 flex items-baseline text-sm font-bold text-red-600">
            <span
              class="self-center flex-shrink-0 h-5 w-5 text-red-500 i-heroicons-solid-arrow-sm-down"
            ></span>
            <span class="sr-only"> Decreased by </span>
            3.2%
          </p>
          <div class="absolute bottom-0 inset-x-0 bg-slate-800 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <RButton type="outline" color="primary">View all</RButton>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>
<style lang="scss" scoped></style>
