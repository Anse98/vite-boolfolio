import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue';
import Portfolio from './pages/projects/Portfolio.vue';
import Show from './pages/projects/Show.vue';

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

        },

        {
            path: '/project/:slug',
            name: 'projects.show',
            component: Show
        }
    ]
})

export { router }