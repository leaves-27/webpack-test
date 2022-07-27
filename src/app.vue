<template>
  <div>
    <header class="header">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>
<style scoped>
  .header{ background-color:brown;}
  .header a{ display: block; }
</style>
<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0);
</script>
