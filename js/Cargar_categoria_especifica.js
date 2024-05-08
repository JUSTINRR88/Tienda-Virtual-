


function Cargar_categoria_especifica(){

    async function buscar_categoria(){

        try{
            const res = await fetch('https://fakestoreapi.com/products/1');
            const buscar = await res.json();
            elmentos(buscar);
            console.log(res);
        }catch(error){
            console.log("error",error);
            console.log("hola");

        }
    }
    buscar_categoria()


}

function elmentos(lista_elementos){
    let div_header = document.querySelector(".header");
    div_header.innerHTML=`
    <h1>Tienda de ropa de Justin Bercian</h1>
    <div class="btn88">Serch</div>
    `
    lista_elementos.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="">${element.id}</div>

        `
        console.log(element);
        div_header.appendChild(div)
    });

    let div_btn = document.querySelector(".btn88");
    div_btn.addEventListener("click", buscar_categoria)
}



export{ Cargar_categoria_especifica}