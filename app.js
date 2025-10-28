let cara = document.querySelector('#cara');
let ojos = document.querySelector('#ojos');
let boca = document.querySelector('#boca');
let sombrero = document.querySelector('#sombrero');

const cambiarCara = (v) => {
  cara.src = `./imagenes/cara/${v}.svg`;
};

const cambiarOjos = (v) => {
  ojos.src = `./imagenes/ojos/${v}.svg`;
};

const cambiarBoca = (v) => {
  boca.src = `./imagenes/boca/${v}.svg`;
};

const cambiarSombrero = (v) => {
  sombrero.src = `./imagenes/sombrero/${v}.svg`;
};