//intento para filtrado

const filterType = (data,type) => {
  const pokeType = data.filter(element => element.type.includes(typeResult));

 return pokeType

}

window.filterType = filterType;




const order = () => {
  return "order";
};

const statistics = () => {
  return "statistics";
};

window.dataPokemon = {
  filterType,
  order,
};

/*let orderPokemon = [POKEMON.pokemon.id];
orderPokemon.sort(function(b, a) {
  return b - a;
});
console.log(orderPokemon);
*/
/*const sortData= (data, sortBy, sortOrder) => {
const dataSort= data;
  if(sortBy==="name" && sortOrder === "a-z" ){

 dataSort.sort((a,b)=>{
        if(a.name>b.name){
          return 1;
        }
        if(a.name<b.name){
          return -1;
       }
      //return 0;
    });
  }
  if(sortBy==="name" && sortOrder === "z-a" ){
    //return data.reverse();
    dataSort.sort((a,b)=>{

     if(a.name<b.name){
       return 1;
      }
     if(a.name>b.name){
     return -1;
     }
// return 0;
    });
 } return dataSort;
}






let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
*/

/*let order= [POKEMON.pokemon.name];
order.sort;
console.log(order);
*/
