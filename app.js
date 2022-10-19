const { CLIENT_RENEG_WINDOW } = require("tls");
const { crearArchivo } = require("./helpers/multiplicar");
console.clear(); // para limiar consola


console.log(process.argv);
const [, , arg3 = "base=5"] = process.argv;
const[, base = 5] = arg3.split("=");




crearArchivo(base)
    .then((nombreArchivo) => console.log(nombreArchivo))
    .catch((err) => console.log("no funciona"));

console.log("hola mundo asdfaf");

