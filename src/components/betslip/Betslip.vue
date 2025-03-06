<script setup lang="ts">
import { useBetslipStore } from '@/stores/betslip';

const {remove, betslip } = useBetslipStore()

</script>

<template>
  <div v-for="(item, index) in betslip" :key="index" class="flex flex-row align-middle justify-between space-x-2 p-4 border-b-1 border-b-carbon-600">
    <a @click="remove(item.id)" class="text-red-500 font-bold cursor-pointer">X</a>
    <span class="w-full font-bold">{{ item.teamName }}</span>
    <div>{{ item.odds }}</div>
  </div>
</template>

<style>


</style>


