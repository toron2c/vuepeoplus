<script setup lang="ts">
import FriendComponent from '../components/FriendComponent.vue'
export interface People {
  name: String
  nickname: String
  pluses: Number
  age: Number
  tasks: Number
  experience: Number
}

const arr: People[] = [
  {
    name: 'Alice',
    nickname: 'Ally',
    pluses: 5,
    age: 18,
    tasks: 10,
    experience: 3
  },
  {
    name: 'Bob',
    nickname: 'Bobby',
    pluses: 8,
    age: 18,
    tasks: 12,
    experience: 5
  },
  {
    name: 'Charlie',
    nickname: 'Chuck',
    pluses: 6,
    age: 18,
    tasks: 15,
    experience: 4
  },
  {
    name: 'Diana',
    nickname: 'Di',
    pluses: 7,
    age: 18,
    tasks: 8,
    experience: 2
  },
  {
    name: 'Eve',
    nickname: 'Evie',
    pluses: 9,
    age: 18,
    tasks: 20,
    experience: 6
  },
  {
    name: 'Frank',
    nickname: 'Frankie',
    pluses: 4,
    age: 18,
    tasks: 5,
    experience: 1
  }
]
</script>

<template>
  <main>
    <FriendComponent
      v-for="(el, index) in arr"
      :key="index"
      :name="el.name"
      :nickname="el.nickname"
      :age="el.age"
      :pluses="el.pluses"
      :tasks="el.tasks"
      :experience="el.experience"
    />
  </main>
</template>

<style scoped>
div {
  margin: 25px;
}
</style>
