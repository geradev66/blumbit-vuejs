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
    <button @click="guardartech()">Guardar tech</button>  </template>

<script>
export default {
  data(){
    return{
      titulo: "Titulo desde vue",
      titulo2: "",
      subtitulo: "Subtitulo desde vue",
      estado: true,
      contador: 1,
      tecnologias: ["Vue", "React", "Angular"],
      tech: "",
    }
  },
  created(){
    this.titulo2 = "titulo modificado"
  },
  mounted(){
    this.titulo2 = "titulo modificado en mounted"
  },
  methods:{
    funcontadorInc(){
      this.contador++

    },
    funcontadorDec(){
      this.contador--
    },
    cambiarTitulo:function(){
      this.titulo = "Nuevo titulo"
    },
    adicionarTecnologia:function(){
      this.tecnologias.push("Vue 3")
    },
    guardartech(){
      this.tecnologias.push(this.tech)
    }

  }
}
</script>


