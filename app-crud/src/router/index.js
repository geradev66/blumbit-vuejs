import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Blog from '../views/Blog.vue'
import Producto from '../views/Producto.vue'

const routes = [
    {
        path: '/',
        component: Inicio
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/productos',
        component: Producto
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
