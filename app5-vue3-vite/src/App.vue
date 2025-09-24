<script setup>
import { ref, onMounted } from 'vue'
const titulo = ref("Titulo desde vue")
const titulo2 = ref("")
const subtitulo = ref("Subtitulo desde vue")
const estado = ref(true)
const contador = ref(1)
const tecnologias = ref(["Vue", "React", "Angular"])
const tech = ref("")

onMounted(() => {
  titulo2.value = "titulo modificado en mounted"
})
//funciones  o metodos 

    function funcontadorInc(){
      contador.value++

    }
     function funcontadorDec(){
      contador.value--
    }
    const cambiarTitulo = function(){
      titulo2.value = "Nuevo titulo"
    }
    function adicionarTecnologia() {
      tecnologias.value.push("Vue 3")
    }
    function guardartech(){
      tecnologias.value.push(tech)
    }



</script>

<template>
  <h1>Hola mundo desde vue</h1>
  <button @click="cambiarTitulo">Cambiar titulo</button>
  <h2>Option API</h2>
  <h3>{{ titulo }}</h3>
  <input type="text" v-model="titulo">
  <h3>{{ titulo2 }}</h3>
  <strong>{{ subtitulo }}</strong>
  <p>Estado: {{ estado }}</p>
  <p>contador: 
    <button @click="funcontadorInc">+</button> 
      {{ contador }} 
    <button @click="funcontadorDec">-</button></p>
    <p>tecnologias: {{ tecnologias }}</p>
    <button @click="adicionarTecnologia">Adicionar tecnologia</button>
    <br>
    <hr>
    <ul>
      <li v-for="(item, index) in tecnologias">{{ item }}</li>    </ul>
    <input type="text" v-model="tech">
    <button @click="guardartech()">Guardar tech</button>
</template>


