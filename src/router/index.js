import { createWebHistory, createRouter } from "vue-router";
import PageNotFound from '../views/PageNotFound.vue'
  
const routes = [
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router