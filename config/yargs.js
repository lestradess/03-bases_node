const { describe } = require("yargs");


const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        default: 10,
        describe:" Base de la tabla se multiplicar"
    }, {})
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe:"Muestra la tabla por consola"
    })
    .option("h", {
        alias: "hasta",
        type:"number",
        default: 10,
        describe:"Selecciona hasta el número que se quiere multiplicar"
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número"
        }
        return true;
    })
    .argv;
    
    module.exports = argv;