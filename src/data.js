// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

const filter = () => {
  return "filter";
};

const order = () => {
  return "order";
};

const statistics = () => {
  return "statistics";
};

window.example = {
  example,
  filter,
  order,
  statistics,
};
