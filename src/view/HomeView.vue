<script setup lang="ts">
import { ref } from 'vue'
let count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <main>
    <h2>count = {{ count }}</h2>
    <button @click="increment">+1</button>
    <div>
      <input v-model="count" type="text" />
    </div>
  </main>
</template>

<style scoped></style>
