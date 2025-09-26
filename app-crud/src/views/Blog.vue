<script  setup>
import { ref, onMounted } from 'vue'
import blogService from '../blog.service'

const publicaciones = ref([])
onMounted(async()=>{
    const resp = await blogService.obtenerPublicaciones()
    publicaciones.value = resp

})

</script>

<template>
    <h1>Blog</h1>
   <div class="row">
    <div class="col-md-4" v-for="publicacion in publicaciones">
        <div class="card">
            <div class="card-body">
                <img :src="publicacion.cover_image" class="card-img-top" alt="..." v-if="publicacion.cover_image">
                <h5 class="card-title">{{ publicacion.title }}</h5>
                <p class="card-text">{{ publicacion.description }}</p>
                <a href="#" class="btn btn-primary">Leer más</a>
            </div>
        </div>
    </div>
   </div>
</template>


