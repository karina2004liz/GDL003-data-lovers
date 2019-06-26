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

typefire.addEventListener("click",() => {

let fire = typefire.value;
let firstp = POKEMON.pokemon.filter(fires => {return fires.type.includes("Fire")});
let datos = Object.values(firstp);
let firstpstring = JSON.stringify(datos);

 console.log(Object.values(firstp));

alert("Seleccionaste tipo fuego");
document.getElementById("printfilter").innerHTML = "these are fire type pokemon" + firstpstring;

});

typewhater.addEventListener("click",()=>{
let wather = typewhater.value;
let second = POKEMON.pokemon.filter(water =>{return water.type.includes ("Water")});
let secondstring = JSON.stringify(second);

alert("Seleccionaste tipo agua");
document.getElementById("printfilter").innerHTML = "These are water type pokemon" + secondstring;
});


typegrass.addEventListener("click",()=>{
let grass = typegrass.value;
let second = POKEMON.pokemon.filter(grass =>{return grass.type.includes ("Grass")});
let secondstring = JSON.stringify(second);

alert("Seleccionaste tipo hierva");
document.getElementById("printfilter").innerHTML = "These are Grass type pokemon" + secondstring;

});

typebug.addEventListener("click",() => {

let bug = typebug.value;
let firstp = POKEMON.pokemon.filter(bugs => {return bugs.type.includes("Bug")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Insecto");
document.getElementById("printfilter").innerHTML = "these are bug type pokemon" + firstpstring;
});

typefly.addEventListener("click",() => {

let fly = typefly.value;
let firstp = POKEMON.pokemon.filter(flies => {return flies.type.includes("Flying")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo volador");
document.getElementById("printfilter").innerHTML = "these are flying type pokemon" + firstpstring;
});

typepoison.addEventListener("click",() => {

let poison = typepoison.value;
let firstp = POKEMON.pokemon.filter(pois => {return pois.type.includes("Poison")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Veneno");
document.getElementById("printfilter").innerHTML = "these are Poison type pokemon" + firstpstring;
});

typerock.addEventListener("click",() => {

let rock = typerock.value;
let firstp = POKEMON.pokemon.filter(rocky => {return rocky.type.includes("Rock")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Roca");
document.getElementById("printfilter").innerHTML = "these are Rock type pokemon" + firstpstring;
});

typenormal.addEventListener("click",() => {

let normal = typenormal.value;
let firstp = POKEMON.pokemon.filter(norm => {return norm.type.includes("Normal")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Normal");
document.getElementById("printfilter").innerHTML = "these are Normal type pokemon" + firstpstring;
});

typeelectric.addEventListener("click",() => {

let electric = typeelectric.value;
let firstp = POKEMON.pokemon.filter(elec => {return elec.type.includes("Electric")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Electrico");
document.getElementById("printfilter").innerHTML = "these are Electric type pokemon" + firstpstring;
});

typeground.addEventListener("click",() => {

let ground = typeground.value;
let firstp = POKEMON.pokemon.filter(gro => {return gro.type.includes("Ground")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Tierra");
document.getElementById("printfilter").innerHTML = "these are Ground type pokemon" + firstpstring;
});

typefight.addEventListener("click",() => {

let fight = typefight.value;
let firstp = POKEMON.pokemon.filter(fi => {return fi.type.includes("Fighting")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Luchador");
document.getElementById("printfilter").innerHTML = "these are Fighting type pokemon" + firstpstring;
});

typepsy.addEventListener("click",() => {

let psy = typepsy.value;
let firstp = POKEMON.pokemon.filter(psy => {return psy.type.includes("Psychic")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Psiquico");
document.getElementById("printfilter").innerHTML = "these are Psychic type pokemon" + firstpstring;
});

typeice.addEventListener("click",() => {

let ice = typeice.value;
let firstp = POKEMON.pokemon.filter(ice => {return ice.type.includes("Ice")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Hielo");
document.getElementById("printfilter").innerHTML = "these are Ice type pokemon" + firstpstring;
});

typeghost.addEventListener("click",() => {

let ghost = typeghost.value;
let firstp = POKEMON.pokemon.filter(gho => {return gho.type.includes("Ghost")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Fantasma");
document.getElementById("printfilter").innerHTML = "these are Ghost type pokemon" + firstpstring;
});

typedragon.addEventListener("click",() => {

let dragon = typedragon.value;
let firstp = POKEMON.pokemon.filter(drag => {return drag.type.includes("Dragon")});
let firstpstring = JSON.stringify(firstp);

alert("Seleccionaste tipo Dragon");
document.getElementById("printfilter").innerHTML = "these are Dragon type pokemon" + firstpstring;
});
