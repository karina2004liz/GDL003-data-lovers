//todos los botones
const typefire = document.getElementById('fire');
const typewhater= document.getElementById('water');
const typegrass = document.getElementById('grass');
const typebug = document.getElementById('bug');
const typefly = document.getElementById('fly');
const typepoison = document.getElementById('poison');
const typerock = document.getElementById('rock');
const typenormal = document.getElementById('normal');
const typeelectric = document.getElementById('electric');
const typeground = document.getElementById('ground');
const typefight = document.getElementById('fight');
const typepsy = document.getElementById('psy');
const typeice = document.getElementById('ice');
const typeghost = document.getElementById('ghost');
const typedragon = document.getElementById('dragon');
const showAll = document.getElementById('showAll');

// variables para filtrado ascendente y descendente
let orderNameAsc = document.getElementById ('orderNameAsc');
let orderNameDesc = document.getElementById ('orderNameDesc');
let orderIdAsc = document.getElementById ('orderIdAsc');
let orderIdDesc = document.getElementById ('orderIdDesc');


const contenedor = document.getElementById('container-result'); //Div que almacena mis filtrados
const allOfThem = Object.values(POKEMON.pokemon);
console.log(allOfThem);
const txtCont = document.getElementById('txtCont');
const txtSearch = document.getElementById('txtSearch');
const showOne = document.getElementById('imgcon');
const estadistica = document.getElementById('stad');

// constantes para obtener data y todos mis botones por type type
const data= POKEMON.pokemon;
const inputFilter = document.querySelectorAll('input.myButtons');
console.log(inputFilter);


/* Intento de filtrado universal
inputFilter.forEach(element =>{
  element.addEventListener("click",()=>{
    estadistica.innerHTML= "";
    contenedor.innerHTML = "";

    let pokeFilter = window.filterType(data,element.getAtributte(myButtons));

    contenedor.innerHTML+-`<div class="flip-card">
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


  })
})

*/





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
let dataPoke = allOfThem.find(pok => {
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

// AQUI EMPIEZAN LOS BOTONES DE FILTRADO POR TIPO DE POKEMON


typefire.addEventListener("click",()=>{

contenedor.innerHTML= "";
let wather = typewhater.value;
let firstp = POKEMON.pokemon.filter(water =>{return water.type.includes ("Fire")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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




typewhater.addEventListener("click",()=>{

contenedor.innerHTML= "";
let wather = typewhater.value;
let firstp = POKEMON.pokemon.filter(water =>{return water.type.includes ("Water")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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


typegrass.addEventListener("click",()=>{
  contenedor.innerHTML= "";
let grass = typegrass.value;
let firstp = POKEMON.pokemon.filter(grass =>{return grass.type.includes ("Grass")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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


typebug.addEventListener("click",() => {
contenedor.innerHTML= "";
let bug = typebug.value;
let firstp = POKEMON.pokemon.filter(bugs => {return bugs.type.includes("Bug")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;
let pokemonDataSelect = firstp.forEach( showPokemon => {

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


typefly.addEventListener("click",() => {
contenedor.innerHTML= "";

let fly = typefly.value;
let firstp = POKEMON.pokemon.filter(flies => {return flies.type.includes("Flying")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typepoison.addEventListener("click",() => {
  contenedor.innerHTML= "";

let poison = typepoison.value;
let firstp = POKEMON.pokemon.filter(pois => {return pois.type.includes("Poison")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typerock.addEventListener("click",() => {
  contenedor.innerHTML= "";

let rock = typerock.value;
let firstp = POKEMON.pokemon.filter(rocky => {return rocky.type.includes("Rock")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typenormal.addEventListener("click",() => {
  contenedor.innerHTML= "";

let normal = typenormal.value;
let firstp = POKEMON.pokemon.filter(norm => {return norm.type.includes("Normal")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typeelectric.addEventListener("click",() => {
  contenedor.innerHTML= "";

let electric = typeelectric.value;
let firstp = POKEMON.pokemon.filter(elec => {return elec.type.includes("Electric")});
estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typeground.addEventListener("click",() => {
  contenedor.innerHTML= "";

let ground = typeground.value;
let firstp = POKEMON.pokemon.filter(gro => {return gro.type.includes("Ground")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typefight.addEventListener("click",() => {
  contenedor.innerHTML= "";

let fight = typefight.value;
let firstp = POKEMON.pokemon.filter(fi => {return fi.type.includes("Fighting")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typepsy.addEventListener("click",() => {
  contenedor.innerHTML= "";

let psy = typepsy.value;
let firstp = POKEMON.pokemon.filter(psy => {return psy.type.includes("Psychic")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typeice.addEventListener("click",() => {
  contenedor.innerHTML= "";

let ice = typeice.value;
let firstp = POKEMON.pokemon.filter(ice => {return ice.type.includes("Ice")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;
let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typeghost.addEventListener("click",() => {
  contenedor.innerHTML= "";

let ghost = typeghost.value;
let firstp = POKEMON.pokemon.filter(gho => {return gho.type.includes("Ghost")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;

let pokemonDataSelect = firstp.forEach( showPokemon => {

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

typedragon.addEventListener("click",() => {
contenedor.innerHTML= "";

let dragon = typedragon.value;
let firstp = POKEMON.pokemon.filter(drag => {return drag.type.includes("Dragon")});

estadistica.innerHTML= "";
let stadic = firstp.length;
let static2 =  (151/100)* stadic + "% of pokemon are of this type";

estadistica.innerHTML +=

`<div id = "stadistic">
<h5> ${static2}</h5>
</div> `
;
let pokemonDataSelect = firstp.forEach( showPokemon => {

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

});
});
