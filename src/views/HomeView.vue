<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center my-5">
        <h1 class="title">
          Проект создан для эффективного управления делами и помощи в организации задач
        </h1>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="12">
        <img class="note" src="/images/note.webp" alt="Note Image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import HomeHeaderComponent from '@/components/HomeComponents/HomeHeaderComponent.vue'
import HomeComponent from '@components/HomeComponents/HomeComponent.vue'
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #00796b;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
@media (max-width: 500px) {
  .note {
    max-width: 400px;
  }
}
@media (max-width: 900px) {
  .note {
    max-width: 500px;
  }
}
@media (max-width: 400px) {
  .note {
    max-width: 320px;
  }
}
</style>
