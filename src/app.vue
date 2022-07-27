<template>
  <a-layout>
    <a-layout-header>
      <router-link class="link" to="/">首页</router-link>
      <router-link class="link" to="/about">关于我们</router-link>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>
<style scoped>
  /* .header{ background-color:brown;}
  .header a{ display: block; }
  .body{
    background-color:darkgray;
    min-height: 600px;
  } */
  .link{
    margin-right: 10px;
  }
</style>
