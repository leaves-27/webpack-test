<template>
  <button @click="count++">{{ count }}</button>
</template>
<style scoped>
  button{ background-color: chartreuse; }
</style>
<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0);
</script>