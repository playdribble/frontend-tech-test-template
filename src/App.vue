<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Betslip from './components/betslip/Betslip.vue'

const containers = ref<any[]>([])

onMounted(async () => {
  const res = await fetch('/api.json')
  const data = await res.json()
  containers.value = data.containers
})

</script>

<template>
  <div class="max-w-254 mx-auto text-white">
    <header class="bg-carbon-950 p-6 border-b border-carbon-600 mb-6">
        <img src="https://www.midnite.com/images/brands/midnite/logo-horizontal-white.svg" class="h-6">
    </header>

    <main class="flex flex-col space-y-4 lg:flex-row lg:space-x-4 p-4 lg:px-0">

      <div class="flex-col flex-grow-1">
          <h1>API RESPONSE:</h1>
          {{ containers }}
      </div>

      <aside class="bg-carbon-800 flex-shrink-0 lg:w-80 p-4 rounded-xl">
        <h2 class="font-semibold mb-2 border-b-1 border-carbon-600 pb-2">Betslip</h2>
        <Betslip />
      </aside>


    </main>
  </div>
</template>
<style>

</style>


