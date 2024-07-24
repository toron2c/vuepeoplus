<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const drawer = ref(false)
</script>

<template>
  <v-app class="app">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Peoplus</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :to="{ path: '/login' }">Войти</v-btn>
        <v-btn text :to="{ path: '/register' }">Зарегистрироваться</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item link :to="{ path: '/' }" exact>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/login' }">
          <v-list-item-title>Войти</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/register' }">
          <v-list-item-title>Зарегистрироваться</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.hidden-sm-and-down {
  display: none;
}
.hidden-md-and-up {
  display: none;
}

@media (min-width: 600px) {
  .hidden-sm-and-down {
    display: flex;
  }

  .hidden-md-and-up {
    display: none;
  }
}
@media (max-width: 600px) {
  .hidden-sm-and-down {
    display: none;
  }

  .hidden-md-and-up {
    display: flex;
  }
}

.v-application {
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
}
.v-toolbar-title {
  font-weight: bold;
}
.v-main {
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
