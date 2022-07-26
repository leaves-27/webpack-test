<template>
  <button @click="count++">{{ count }}</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0);
    return {
      count
    }
  },
  // data(){
  //   return {
  //     count: 0
  //   }
  // }
})
</script>
