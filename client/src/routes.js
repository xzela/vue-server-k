'use strict';

import Item from './components/Item.vue';
import Main from './components/Main.vue';
import List from './components/List.vue';

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
    },
    {
        path: '/list/:id',
        component: Item,
        props: {
            id: true
        }

    }
];

module.exports = routes;
