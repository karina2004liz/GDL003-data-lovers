let typefire = document.getElementById('fire');
let typewhater= document.getElementById('water');
let typegrass = document.getElementById('grass');
let typebug = document.getElementById('bug');
let typefly = document.getElementById('fly');
let typepoison = document.getElementById('poison');
let typerock = document.getElementById('rock');
let typenormal = document.getElementById('normal');
let typeelectric = document.getElementById('electric');
let typeground = document.getElementById('ground');
let typefight = document.getElementById('fight');
let typepsy = document.getElementById('psy');
let typeice = document.getElementById('ice');
let typeghost = document.getElementById('ghost');
let typedragon = document.getElementById('dragon');
let showAll = document.getElementById('showAll');
const contenedor = document.getElementById('container-result');

let allOfThem = POKEMON.pokemon;
console.log(allOfThem);



showAll.addEventListener("click",() => {
  contenedor.innerHTML= "";

let show = showAll.value;


let allPokemons = POKEMON.pokemon.forEach( showPokemon => {

contenedor.innerHTML +=

`<div id= "divcon">
<img id= "imgcon" src="${showPokemon.img}" >
<h1> ${showPokemon.name}</h1>
<h5> ${showPokemon.type}</h5>
<h4> ${showPokemon.num} </h4>
</div>`;
});
//console.log(waterDataSelect);
});

//<button type="button" class="btn btn-block btn-style"
//id="botonModal"  data-id="${fire.id}"
//data-toggle="modal" data-target="#${fire.id}"> ${fire.id}</button>


typefire.addEventListener("click",()=>{
  contenedor.innerHTML= "";
let fire = typefire.value;
let firstp = POKEMON.pokemon.filter(fire =>{return fire.type.includes ("Fire")});

let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

//let secondstring = JSON.stringify(second);

//document.getElementById("printfilter").innerHTML = "These are water type pokemon" + secondstring;

typewhater.addEventListener("click",()=>{
  contenedor.innerHTML= "";
let wather = typewhater.value;
let firstp = POKEMON.pokemon.filter(water =>{return water.type.includes ("Water")});

let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});


typegrass.addEventListener("click",()=>{
  contenedor.innerHTML= "";
let grass = typegrass.value;
let firstp = POKEMON.pokemon.filter(grass =>{return grass.type.includes ("Grass")});

let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

  //let pokemonImage = document.createElement("IMG");
  //pokemonImage.setAttribute("src", print.img);
//  pokemonImage.setAttribute("width", "auto");
//  pokemonImage.setAttribute("height", "auto");
//  let myH2 = document.createElement('h3');
  //myH2.textContent = print.name;
  //let myH3 = document.createElement('h3');
  //myH3.textContent = print.num;

//  document.getElementById("printfilter").appendChild(pokemonImage);
//  document.getElementById('printfilter').appendChild(myH2);
  //document.getElementById('printfilter').appendChild(myH3);

typebug.addEventListener("click",() => {
  contenedor.innerHTML= "";

let bug = typebug.value;
let firstp = POKEMON.pokemon.filter(bugs => {return bugs.type.includes("Bug")});
//let firstpstring = JSON.stringify(firstp);


//document.getElementById("printfilter").innerHTML = "these are bug type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

    contenedor.innerHTML +=

    `<div id= "divcon">
    <img id= "imgcon" src="${print.img}" >
    <h1> ${print.name}</h1>
    <h4> ${print.num} </h4>
    </div>`;
    });
  });

//  let pokemonImage = document.createElement("IMG");
//  pokemonImage.setAttribute("src", print.img);
//  pokemonImage.setAttribute("width", "auto");
//  pokemonImage.setAttribute("height", "auto");
//  let myH2 = document.createElement('h3');
//  myH2.textContent = print.name;
//  let myH3 = document.createElement('h3');
//  myH3.textContent = print.num;

//  document.getElementById("printfilter").appendChild(pokemonImage);
//  document.getElementById('printfilter').appendChild(myH2);
//  document.getElementById('printfilter').appendChild(myH3);

typefly.addEventListener("click",() => {
  contenedor.innerHTML= "";

let fly = typefly.value;
let firstp = POKEMON.pokemon.filter(flies => {return flies.type.includes("Flying")});
//let firstpstring = JSON.stringify(firstp);


//document.getElementById("printfilter").innerHTML = "these are flying type pokemon" + firstpstring;

let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
  });

typepoison.addEventListener("click",() => {
  contenedor.innerHTML= "";

let poison = typepoison.value;
let firstp = POKEMON.pokemon.filter(pois => {return pois.type.includes("Poison")});
//let firstpstring = JSON.stringify(firstp);


//document.getElementById("printfilter").innerHTML = "these are Poison type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

typerock.addEventListener("click",() => {
  contenedor.innerHTML= "";

let rock = typerock.value;
let firstp = POKEMON.pokemon.filter(rocky => {return rocky.type.includes("Rock")});
//let firstpstring = JSON.stringify(firstp);
//document.getElementById("printfilter").innerHTML = "these are Rock type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
  });

typenormal.addEventListener("click",() => {
  contenedor.innerHTML= "";

let normal = typenormal.value;
let firstp = POKEMON.pokemon.filter(norm => {return norm.type.includes("Normal")});
//let firstpstring = JSON.stringify(firstp);

//document.getElementById("printfilter").innerHTML = "these are Normal type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
  });

typeelectric.addEventListener("click",() => {
  contenedor.innerHTML= "";

let electric = typeelectric.value;
let firstp = POKEMON.pokemon.filter(elec => {return elec.type.includes("Electric")});
//let firstpstring = JSON.stringify(firstp);
//document.getElementById("printfilter").innerHTML = "these are Electric type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {


  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

typeground.addEventListener("click",() => {
  contenedor.innerHTML= "";

let ground = typeground.value;
let firstp = POKEMON.pokemon.filter(gro => {return gro.type.includes("Ground")});
//let firstpstring = JSON.stringify(firstp);
//document.getElementById("printfilter").innerHTML = "these are Ground type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
  });

typefight.addEventListener("click",() => {
  contenedor.innerHTML= "";

let fight = typefight.value;
let firstp = POKEMON.pokemon.filter(fi => {return fi.type.includes("Fighting")});
//let firstpstring = JSON.stringify(firstp);
//document.getElementById("printfilter").innerHTML = "these are Fighting type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

typepsy.addEventListener("click",() => {
  contenedor.innerHTML= "";

let psy = typepsy.value;
let firstp = POKEMON.pokemon.filter(psy => {return psy.type.includes("Psychic")});

let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

typeice.addEventListener("click",() => {
  contenedor.innerHTML= "";

let ice = typeice.value;
let firstp = POKEMON.pokemon.filter(ice => {return ice.type.includes("Ice")});
//let firstpstring = JSON.stringify(firstp);
//document.getElementById("printfilter").innerHTML = "these are Ice type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

typeghost.addEventListener("click",() => {
  contenedor.innerHTML= "";

let ghost = typeghost.value;
let firstp = POKEMON.pokemon.filter(gho => {return gho.type.includes("Ghost")});
//let firstpstring = JSON.stringify(firstp);
//document.getElementById("printfilter").innerHTML = "these are Ghost type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});

typedragon.addEventListener("click",() => {
contenedor.innerHTML= "";

let dragon = typedragon.value;
let firstp = POKEMON.pokemon.filter(drag => {return drag.type.includes("Dragon")});
//let firstpstring = JSON.stringify(firstp);
//document.getElementById("printfilter").innerHTML = "these are Dragon type pokemon" + firstpstring;
let pokemonDataSelect = firstp.forEach(print => {

  contenedor.innerHTML +=

  `<div id= "divcon">
  <img id= "imgcon" src="${print.img}" >
  <h1> ${print.name}</h1>
  <h4> ${print.num} </h4>
  </div>`;
  });
});
