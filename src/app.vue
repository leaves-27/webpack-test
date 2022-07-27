<template>
  <div>
    <header class="header">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </header>
    <body class="body">
      <router-view></router-view>
    </body>
  </div>
</template>
<style scoped>
  .header{ background-color:brown;}
  .header a{ display: block; }
  .body{
    background-color:darkgray;
    min-height: 600px;
  }
</style>
<script lang="ts" setup>

</script>
