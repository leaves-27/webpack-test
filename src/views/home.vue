<template>
  <div>{{ state.title }}</div>
  <div>
    <Item 
      v-for="(item, index) in state.items"
      :key="'item_'+index"
      :title="item.title"
      :description="item.description" />
  </div>
</template>
<style scoped>
  button{ background-color: chartreuse; }
</style>
<script lang="ts" setup>
import { reactive } from 'vue';
import Item from './item.vue';
const state = reactive({
  title: 'test',
  items: [{
    title: 'fdfdf',
    description: 'dfdfdfdfdff'
  }, {
    title: '213213',
    description: '213123213123123'
  }, {
    title: 'fdfd0088f',
    description: 'aaaadfdfdfdfdff'
  }]
});

</script>