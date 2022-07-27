<template>
  <div>{{ article.title }}</div>
  <div>{{ article.description }}</div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
interface Article {
  title: string;
  description: string;
}

const article = reactive<Article>({
  title: '新文章',
  description: '的冯绍峰身份的'
});
</script>