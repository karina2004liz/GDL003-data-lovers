//FUNCION PARA FILTRADO UNIVERSAL
// Recibe 2 datos, mi Data y el input seleccionado por tipo
const filterType = (data,type) => {
  const pokeType = data.filter(element => element.type.includes(type));

return pokeType;
}

window.filterType = filterType; //Igualo window.filterType a mi función filterType




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
