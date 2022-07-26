<template>
  <button @click="count++">{{ count }}</button>
</template>
<script lang="ts">
// export default {
//   data(){
//     return {
//       count: 0
//     }
//   }
// }
import { defineComponent } from 'vue'

export default defineComponent({
  // setup() {
  //   return {
  //     count: 0
  //   }
  // },
  data(){
    return {
      count: 0
    }
  }
})
</script>
