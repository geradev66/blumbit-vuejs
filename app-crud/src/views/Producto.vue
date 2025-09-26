<script  setup>
import { onMounted, ref } from 'vue';

 const productos = ref([])
 
 const producto = ref({})
onMounted(() =>{
    productos.value.push(
        {
            id: 1,
            nombre: 'Teclado',
            precio: 100,
            imagen: 'https://m.media-amazon.com/images/I/71lI0RJAInL._AC_SL1500_.jpg'
        },
        {
            id: 2,
            nombre: 'Monitor',
            precio: 2000,
            imagen: 'https://www.lg.com/content/dam/channel/wcms/mx/images/monitores/22mr410-b_awmq_enms_mx_c/gallery/large01.jpg'
        },
        {
            id: 3,
            nombre: 'Parlantes',
            precio: 300,
            imagen: 'https://www.mousestar.com.co/wp-content/uploads/2025/01/31730051400_1.png'
        }
    )
})

function funGuardarProducto(){
    const posicion = productos.value.findIndex(item=> item.id === producto.value.id)
    if(posicion > -1){
        productos.value[posicion] = producto.value
    }else{
        productos.value.push(producto.value)
    }
    producto.value={}
  
}

function funEditarProducto(prod){
    let mi_prod = {...prod}
   producto.value = mi_prod

    
}

function funEliminarProducto(pos){
    if(confirm('¿Estás seguro de eliminar este producto?')){
        productos.value.splice(pos,1)
    }

}
</script>

<template>
    <div class="productos-container">
        <h2 class="titulo">Productos</h2>
        <div class="formulario-container">
            <h3 class="formulario-titulo">Agregar Nuevo Producto</h3>
            <form class="formulario">
                <div class="campo-grupo">
                    <label for="nombre" class="campo-label">id</label>
                    <input type="number" id="nombre" class="campo-input" placeholder="Ingresa el nombre del producto" v-model="producto.id">
                </div>
                <div class="campo-grupo">
                    <label for="nombre" class="campo-label">Nombre del Producto</label>
                    <input type="text" id="nombre" class="campo-input" placeholder="Ingresa el nombre del producto" v-model="producto.nombre">
                </div>
                <div class="campo-grupo">
                    <label for="precio" class="campo-label">Precio</label>
                    <input type="number" id="precio" class="campo-input" placeholder="0.00" min="0" step="0.01" v-model="producto.precio"> 
                </div>
                <div class="campo-grupo">
                    <label for="imagen" class="campo-label">URL de la Imagen</label>
                    <input type="url" id="imagen" class="campo-input" placeholder="https://ejemplo.com/imagen.jpg" v-model="producto.imagen">
                </div>
                <button type="button" class="btn-formulario" @click="funGuardarProducto">
                    <span class="btn-icono" >+</span>
                    Guardar Producto
                </button>
            </form>
        </div>
        <div class="tabla-wrapper">
            <table class="tabla-productos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(prod, pos) in productos" :key="prod.id">
                        <td>{{ prod.id }}</td>
                        <td class="nombre-producto">{{ prod.nombre }}</td>
                        <td class="precio">${{ prod.precio.toLocaleString() }}</td>
                        <td class="imagen-container">
                            <img :src="prod.imagen" :alt="prod.nombre" class="producto-imagen">
                        </td>
                        <td class="acciones">
                            <button class="btn btn-editar" @click="funEditarProducto(prod)">Editar</button>
                            <button class="btn btn-eliminar" @click="funEliminarProducto(pos)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.productos-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.titulo {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tabla-wrapper {
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    overflow: hidden;
    border: 1px solid #e1e8ed;
}

.tabla-productos {
    width: 100%;
    border-collapse: collapse;
    background: white;
}

.tabla-productos thead {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.tabla-productos th {
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.tabla-productos tbody tr {
    transition: all 0.3s ease;
    border-bottom: 1px solid #f1f3f4;
}

.tabla-productos tbody tr:hover {
    background-color: #f8f9ff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.tabla-productos tbody tr:last-child {
    border-bottom: none;
}

.tabla-productos td {
    padding: 1.2rem 1rem;
    vertical-align: middle;
    font-size: 0.95rem;
}

.nombre-producto {
    font-weight: 600;
    color: #2c3e50;
}

.precio {
    font-weight: 700;
    color: #27ae60;
    font-size: 1.1rem;
}

.imagen-container {
    text-align: center;
}

.producto-imagen {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid #e1e8ed;
    transition: all 0.3s ease;
}

.producto-imagen:hover {
    transform: scale(1.1);
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.acciones {
    text-align: center;
}

.btn {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 0.3rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.btn:active {
    transform: translateY(0);
}

.btn-editar {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
}

.btn-editar:hover {
    background: linear-gradient(135deg, #2980b9, #1f5f8b);
}

.btn-eliminar {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
}

.btn-eliminar:hover {
    background: linear-gradient(135deg, #c0392b, #a93226);
}

/* Responsive Design */
@media (max-width: 768px) {
    .productos-container {
        padding: 1rem;
    }
    
    .titulo {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    
    .tabla-productos th,
    .tabla-productos td {
        padding: 0.8rem 0.5rem;
        font-size: 0.85rem;
    }
    
    .producto-imagen {
        width: 60px;
        height: 60px;
    }
    
    .btn {
        padding: 0.5rem 0.8rem;
        font-size: 0.75rem;
        margin: 0.2rem;
    }
    
    .acciones {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}

@media (max-width: 480px) {
    .tabla-wrapper {
        overflow-x: auto;
    }
    
    .tabla-productos {
        min-width: 600px;
    }
}

/* Estilos del Formulario */
.formulario-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    padding: 2rem;
    margin-bottom: 3rem;
    border: 1px solid #e1e8ed;
    position: relative;
    overflow: hidden;
}

.formulario-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.formulario-titulo {
    color: #2c3e50;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: center;
    position: relative;
}

.formulario-titulo::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
}

.formulario {
    display: grid;
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
}

.campo-grupo {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.campo-label {
    font-weight: 600;
    color: #2c3e50;
    font-size: 0.95rem;
    letter-spacing: 0.3px;
    margin-bottom: 0.3rem;
}

.campo-input {
    padding: 1rem 1.2rem;
    border: 2px solid #e1e8ed;
    border-radius: 10px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
    background: #fafbfc;
    color: #2c3e50;
}

.campo-input:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
}

.campo-input:hover {
    border-color: #c5d2ea;
    background: white;
}

.campo-input::placeholder {
    color: #a0a7b4;
    font-style: italic;
}

.btn-formulario {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 1.2rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
}

.btn-formulario::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.btn-formulario:hover::before {
    left: 100%;
}

.btn-formulario:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

.btn-formulario:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-icono {
    font-size: 1.3rem;
    font-weight: bold;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Responsive para el formulario */
@media (max-width: 768px) {
    .formulario-container {
        padding: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .formulario-titulo {
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }
    
    .formulario {
        gap: 1.2rem;
    }
    
    .campo-input {
        padding: 0.9rem 1rem;
        font-size: 0.95rem;
    }
    
    .btn-formulario {
        padding: 1rem 1.5rem;
        font-size: 1rem;
        gap: 0.6rem;
    }
    
    .btn-icono {
        width: 24px;
        height: 24px;
        font-size: 1.1rem;
    }
}

@media (max-width: 480px) {
    .formulario-container {
        padding: 1rem;
        border-radius: 12px;
    }
    
    .formulario-titulo {
        font-size: 1.3rem;
    }
    
    .campo-input {
        padding: 0.8rem;
        font-size: 0.9rem;
    }
    
    .btn-formulario {
        padding: 0.9rem 1.2rem;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
    }
}
</style>
