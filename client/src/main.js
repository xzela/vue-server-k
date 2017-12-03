import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Main from './components/Main.vue';
import List from './components/List.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect:'/main'
    },
    {
        path: '/main',
        component: Main,
    },
    {
        path: '/list',
        component: List
    }
];

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});