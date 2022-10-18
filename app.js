const { crearArchivo } = require("./helpers/multiplicar");
console.clear(); // para limiar consola
const base = 7;

crearArchivo(base)
    .then((nombreArchivo) => console.log(nombreArchivo))
    .catch((err) => console.log("no funciona"));

console.log("hola mundo");

