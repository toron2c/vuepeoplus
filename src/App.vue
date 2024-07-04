<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-container class="header">
        <v-row class="justify-space-between w-100">
          <v-col class="d-flex">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex justify-end">
            <RouterLink to="/registration">Регистрация</RouterLink>
            <RouterLink to="/login">Войти</RouterLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.header {
  margin: 0;
  padding: 0;
  max-width: 100%;
}
a {
  text-decoration: none;
  font-size: 1.6rem;
  color: #000;
  padding: 0.6rem 0.8rem;
  transition: all 2s;
}
a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  color: hsla(330, 85%, 46%, 0.5);
}
</style>
