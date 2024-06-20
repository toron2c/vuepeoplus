<script setup lang="ts">
import type { People } from './../view/FriendsView.vue'
defineProps<People>()
</script>

<template>
  <div class="box">
    <div>{{ name }}, {{ nickname }}</div>
    <div>age: {{ age }}</div>
    <div>Pluses: {{ pluses }}</div>
    <div>Tasks: {{ tasks }}</div>
    <div>Experience {{ experience }}</div>
  </div>
</template>

<style>
.box {
  margin: 25px;
}
</style>
