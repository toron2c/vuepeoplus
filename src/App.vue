<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-system-bar>
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-app-bar app>
      <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </header>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
nav {
  margin: 2rem auto;
  display: flex;
  justify-content: center;
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
