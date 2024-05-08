function Cargar_categorias() {

    async function categorias1(){
        try{
            const res = await fetch('https://fakestoreapi.com/products/categories');
            const categorias = await res.json();
            imprimir_categorias(categorias)
        }catch(error){
            console.error("Error ", error);

        }
    }
    categorias1();

}

function imprimir_categorias(lista_categorias) {
    let div_informacion = document.querySelector("#div_summery_description")
    
    lista_categorias.forEach(element => {
        
        let div = document.createElement("div")
        div.classList = "item_categoria"
        div.innerHTML = `
        <input  type="checkbox" class="cuadro" id="${element}" >
        <label for="${element}" class="txt"> ${element} </label >
        `

        div_informacion.appendChild(div)
    });
}

export {Cargar_categorias}