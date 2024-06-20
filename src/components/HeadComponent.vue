<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <h1>peoplus</h1>
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/">Tasks</RouterLink></li>
        <li><RouterLink to="/friends">Friends</RouterLink></li>
        <li><RouterLink to="/">People Pluses</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
}
ul {
  display: flex;
  align-items: center;
}
li {
  list-style-type: none;
  margin: 0 5px;
}
</style>
