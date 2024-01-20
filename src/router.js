import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue';
import Portfolio from './pages/projects/Portfolio.vue';
import Show from './pages/projects/Show.vue';
import Page404 from './pages/404.vue';
import Types from './pages/project_types/Types.vue';

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
        },

        {
            path: '/types',
            name: 'types.index',
            component: Types
        },


        //MODO PER DEFINIRE PATH NOT FOUND, SEMPRE IN FONDO
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: Page404
        }
    ]
})

export { router }