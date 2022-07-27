import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

const app = createApp(App);
app.use(router);
// app.config.errorHandler = (err)=>{
//   console.log('===error:', err.message)
// }
app.mount("#app")
