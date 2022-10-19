const { CLIENT_RENEG_WINDOW } = require("tls");
const argv = require("yargs").argv;
const { crearArchivo } = require("./helpers/multiplicar");
console.clear(); // para limiar consola

console.log(process.argv);
console.log(argv);




// crearArchivo(base)
//     .then((nombreArchivo) => console.log(nombreArchivo))
//     .catch((err) => console.log("no funciona"));

// console.log("hola mundo asdfaf");

