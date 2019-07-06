// boton para mostrar todos los pokemons
const showAll = document.getElementById('showAll');
// variables para filtrado ascendente y descendente
let orderNameAsc = document.getElementById ('orderNameAsc');
let orderNameDesc = document.getElementById ('orderNameDesc');
// constantes para busqueda por nombre
const txtCont = document.getElementById('txtCont');
const txtSearch = document.getElementById('txtSearch');

const contenedor = document.getElementById('container-result'); //Div que almacena mis filtrados
const showOne = document.getElementById('imgcon'); // div para mostrar individuales
const estadistica = document.getElementById('stad'); // parrafo para mostar estadísticas

//Obtiene toda mi data pokemon
const data= POKEMON.pokemon;
// Obtenemos todos los botones de filtrado
const inputFilter = document.querySelectorAll('input.myButtons');
console.log(inputFilter);



//******FILTRADO UNIVERSAL QUE OBTIENE MI QUERYSELECTOR PARA DEFINIR MI FILTRADO POR TIPO******
//Definimos un forEach para cada uno de mis """NodeList""
inputFilter.forEach(element =>{
  // A cada NodeList se le asigna el evento "click"
  element.addEventListener("click",()=>{
//almacenamos en una variable el filtrado que recibe mi data y el atributo del boton seleccionado
    let pokeFilter = window.filterType(data, element.getAttribute("type-poke"));
    console.log(pokeFilter);
//dejamos los contenedores con un string vacío para que no se almacenen los datos en pantalla
    contenedor.innerHTML= "";
    estadistica.innerHTML= "";
//obtenemos la longitud de nuestro filtrado para sacar estadísticas
    let stadic = pokeFilter.length;
    let static2 =  (151/100)* stadic + "% of pokemon are of this type";
// Se imprime en este div marcado en html
    estadistica.innerHTML +=

    `<div id = "stadistic">
    <h5> ${static2}</h5>
    </div> `
    ;
//Definimos que para c/u de nuestros elementos filtrados se va a imprimir un div para almacenar la data filtrada
pokeFilter.forEach(pokeFilter =>{

  contenedor.innerHTML+= `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src=${pokeFilter.img} alt="Avatar" style="width:200px;height:200px;">
        <h1>${pokeFilter.name}</h1>

      </div>
      <div class="flip-card-back">
        <h6>Id: ${pokeFilter.num} </h6>
        <h6>Type: ${pokeFilter.type}</h6>
        <h6>Height: ${pokeFilter.height} </h6>
        <h6>Weignt: ${pokeFilter.weight}</h6>
        <h7> Weaknesses: ${pokeFilter.weaknesses} </h7>
      </div>
    </div>
  </div>`

    });
  });
});

//***************FIN DE FILTRADO UNIVERSAL******************************

//filtrado ascendente y descendente
orderNameDesc.addEventListener("click", () =>{

  let orderByNameDesc = data.sort(function (a, b){
      return ((a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0));
  });
  console.log(data);
});

orderNameAsc.addEventListener("click", () =>{

  const data= POKEMON.pokemon;
  let orderByNameAsc = data.sort(function (a, b){
      return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
  });
  console.log(data);
});


//Filtrado por busqueda
txtSearch.addEventListener("click",() => {
  estadistica.innerHTML = "";
contenedor.innerHTML= "";
let valor = txtCont.value;
let min = valor.replace(/\b\w/g, l => l.toUpperCase());
let dataPoke = data.find(pok => {
  return pok.name.includes(min);
})
  contenedor.innerHTML +=
  `<div id= "divconind">
  <img id= "imgconind" src="${dataPoke.img}" >
  </div>
  <div id= "divconind2">
  <h1> ${dataPoke.name}</h1>
  <h1>Id: ${dataPoke.num} </h1>
  <h1>Type: ${dataPoke.type}</h1>
  <h1>Height: ${dataPoke.height} </h1>
  <h1>Weignt: ${dataPoke.weight}</h1>
  <h2> Weaknesses: ${dataPoke.weaknesses} </h2>
  </div>`

});

//Mostrar todos
showAll.addEventListener("click",() => {
contenedor.innerHTML= "";
estadistica.innerHTML= "";
let show = showAll.value;
let allPokemons = POKEMON.pokemon.forEach( showPokemon => {

contenedor.innerHTML +=
`<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src=${showPokemon.img} alt="Avatar" style="width:200px;height:200px;">
      <h1>${showPokemon.name}</h1>

    </div>
    <div class="flip-card-back">
      <h6>Id: ${showPokemon.num} </h6>
      <h6>Type: ${showPokemon.type}</h6>
      <h6>Height: ${showPokemon.height} </h6>
      <h6>Weignt: ${showPokemon.weight}</h6>
      <h7> Weaknesses: ${showPokemon.weaknesses} </h7>
    </div>
  </div>
</div>`

} );
});
