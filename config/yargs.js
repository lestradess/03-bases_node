const { describe } = require("yargs");


const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe:" Base de la tabla se multiplicar"
    }, {})
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe:"Muestra la tabla por consola"
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número"
        }
        return true;
    })
    .argv;
    
    module.exports = argv;