import { createApp } from 'vue';
import App from './app.vue'

const app = createApp(App);
// app.config.errorHandler = (err)=>{
//   console.log('===error:', err.message)
// }
app.mount("#app")
