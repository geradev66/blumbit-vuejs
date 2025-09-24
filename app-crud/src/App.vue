<script setup>
import Inicio from './views/Inicio.vue'
import Blog from './views/Blog.vue'
import Producto from './views/Producto.vue'

</script>

<template>
  <RouterLink to="/">Inicio</RouterLink> |
  <RouterLink to="/blog">Blog</RouterLink> |
  <RouterLink to="/productos">Producto</RouterLink> 

  <RouterView />

</template>


