import { Cargar_categorias } from "./Cargar_categorias.js";
import { cargar_producto } from "./Cargar_productos.js";
import { Cargar_categoria_especifica } from "./Cargar_categoria_especifica.js";


let DOM = document.querySelector("#root")

DOM.innerHTML = `
    <header class="header"></header>
    <main class="body">
        <section id="div_producto_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer></footer>
`


    async function funcion_asincronica(){

        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            cargar_producto(data) 
        }catch(error){
            console.error("Error ", error);
        }



    }
    funcion_asincronica()

Cargar_categorias()    
Cargar_categoria_especifica()