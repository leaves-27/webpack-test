<template>
  <div class="item">
    <div class="title">{{ props.title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>
<style>
  .item{ display: flex;}
  .title{ width: 200px; }
  .desc{ flex: 1; }
</style>
<script lang="ts" setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  },
  description: {
    type: String,
    default: '',
    required: true
  }
});

const desc = computed(() => props.description.slice(0, 4));

</script>