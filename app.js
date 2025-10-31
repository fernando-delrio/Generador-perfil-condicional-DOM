
const cara       = document.querySelector("#cara");
const ojos       = document.querySelector("#ojos");
const boca       = document.querySelector("#boca");
const sombrero   = document.querySelector("#sombrero");


const cambiarCara = (archivo) => {
  cara.src = "./imagenes/calabaza/" + archivo + ".PNG";
};


const cambiarOjos = (archivo) => {
  ojos.src = "./imagenes/ojos/" + archivo + ".svg";
};


const cambiarBoca = (archivo) => {
  boca.src = "./imagenes/boca/" + archivo + ".svg";
};


const cambiarSombrero = (archivo) => {
  sombrero.src = "./imagenes/sombreros/" + archivo + ".PNG";
};