//FUNCION PARA FILTRADO UNIVERSAL
// Recibe 2 datos, mi Data y el input seleccionado por tipo
const filterType = (data,type) => {
  const pokeType = data.filter(element => element.type.includes(type));

return pokeType;
};

window.filterType = filterType; //Igualo window.filterType a mi función filterType


//FUNCION PARA ORDEN POR NOMBRE
//recibe 2 datos, mi Data y el valor del input "AZ" o "ZA"
const sortData = (data, condicion) => {


   if(condicion == "AZ"){

     arr = data.sort((a, b) => a.name.localeCompare(b.name));
   }
   else {
      arr = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
   }

  return "arr";
};

window.sortData =sortData;

//FUNCION PARA ESTADISTICAS

const stadistics = (data) => {

  return data.length ;
};


window.stadistics = stadistics;
