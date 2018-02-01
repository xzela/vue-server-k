'use strict';

import Item from './components/Item.vue';
import Main from './components/Main.vue';
import List from './components/List.vue';
import Add from './components/Add.vue';

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
        path: '/people',
        component: List
    },
    {
        path: '/add',
        component: Add
    },
    {
        path: '/people/:id',
        component: Item,
        props: {
            id: true
        }

    }
];

module.exports = routes;
