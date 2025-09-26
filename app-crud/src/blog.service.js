import {Api} from "./api"

export default {
    async obtenerPublicaciones(){
        const {data} = await Api().get("/articles")
        return data
    },



    
    async guardarPublicacion(datos){
        const {data} = await Api().post("/articles",datos)
        return data 
    },
    async mostrarPublicacion(id){
        const {data} = await Api().get(`/articles/${id}`)
        return data
    },
    async actualizarPublicacion(id,datos){
        const {data} = await Api().put(`/articles/${id}`,datos)
        return data
    },
    async eliminarPublicacion(id){
        const {data} = await Api().delete(`/articles/${id}`)
        return data
    }

}

