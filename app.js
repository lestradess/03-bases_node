const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear(); // para limiar consola

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then((nombreArchivo) => console.log(nombreArchivo.green, "creado".rainbow))
    .catch((err) => console.log("no funciona".red));


