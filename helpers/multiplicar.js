const fs = require("fs");
require("colors");


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    
    try {

        let salida, consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log("************************************************".green);
            console.log("   Tabla de multiplicar del: ", base, "hasta el: ", hasta);
            console.log("************************************************".green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        console.log(salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
    
    
};
module.exports = { crearArchivo };


// forma 1
// const crearArchivo = (base = 5) => {

//     const promesa = new Promise((resolve, reject) => {
//         console.log("***********************************");
//         console.log("   Tabla de multiplicar del: ", base);
//         console.log("***********************************");

//         let salida = "";

//         for (let i = 1; i <= 10; i++) {
//           console.log(`${base} x ${i} = ${base * i}`);
//           salida += `${base} x ${i} = ${base * i}\n`;
//         }
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`Tabla-${base}.txt creado`);
//         })
//     return promesa;

// };