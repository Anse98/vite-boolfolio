import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue';
import Portfolio from './pages/projects/Portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/contact-us',
            name: 'contact',
            component: Contact
        },

        {
            path: '/projects',
            name: 'projects.index',
            component: Portfolio

        }
    ]
})

export { router }