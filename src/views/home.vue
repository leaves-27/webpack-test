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
import { reactive, onMounted } from 'vue';
import Item from './item.vue';
const state = reactive({
  title: '',
  items: []
});

onMounted(()=>{
  state.items = [{
    title: 'fdfdf',
    description: 'dfdfdfdfdff'
  }, {
    title: '213213',
    description: '213123213123123'
  }, {
    title: 'fdfd0088f',
    description: 'aaaadfdfdfdfdff'
  }];

  setTimeout(()=>{
    state.items = [{
    title: '中国万岁玩玩岁',
    description: '中国万岁玩玩岁中国万岁玩玩岁中国万岁玩玩岁中国万岁玩玩岁中国万岁玩玩岁中国万岁玩玩岁中国万岁玩玩岁'
  }, {
    title: '魅力杭州',
    description: '魅力杭州魅力杭州魅力杭州魅力杭州魅力杭州魅力杭州魅力杭州'
  }, {
    title: '炎热的夏季',
    description: '炎热的夏季炎热的夏季炎热的夏季炎热的夏季炎热的夏季炎热的夏季'
  }];
  }, 1000)
})

</script>