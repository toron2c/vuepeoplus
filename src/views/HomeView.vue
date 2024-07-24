<template>
  <div class="home">
    <HomeHeaderComponent />
    <HomeComponent />
  </div>
</template>

<script setup lang="ts">
import HomeHeaderComponent from '@/components/HomeComponents/HomeHeaderComponent.vue'
import HomeComponent from '@components/HomeComponents/HomeComponent.vue'
</script>

<style scoped>
.home {
  width: 600px;
  height: 800px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
  overflow: hidden;
  color: pink;
}
.home:before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 15px;
  background: linear-gradient(to bottom, #f9f9f9, #ccc);
  border-bottom: 2px solid #ccc;
  transform: translateX(-50%);
  z-index: 1;
}

.home:after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 15px;
  background: linear-gradient(to bottom, #ddd, #f9f9f9);
  border-top: 2px solid #ccc;
  transform: translateX(-50%);
  z-index: 1;
  top: auto;
  bottom: 0;
}
.home .header {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.home .list {
  list-style-type: none;
  padding: 0;
  position: relative;
  z-index: 2;
}

.home .list li {
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.home .list li input[type='checkbox'] {
  margin-right: 10px;
}

.home .list li input[type='text'] {
  border: none;
  border-bottom: 1px solid #ccc;
  width: 80%;
  font-size: 18px;
}

.notebook .list li input[type='text']:focus {
  outline: none;
  border-bottom: 1px solid #333;
}
</style>
