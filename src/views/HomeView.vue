<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const countStore = useCounterStore()

const { count, doubleCount } = storeToRefs(countStore)
const { increment } = countStore
</script>

<template>
  <main>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <v-btn @click="increment">Increment</v-btn>
  </main>
</template>

<style scoped>
main {
  font-size: 1.6rem;
  text-align: center;
}
</style>
