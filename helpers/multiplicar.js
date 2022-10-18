const fs = require("fs");
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

const crearArchivo = async (base = 5) => {
    console.log("***********************************");
    console.log("   Tabla de multiplicar del: ", base);
    console.log("***********************************");

    let salida = "";

    for (let i = 1; i <= 10; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `Tabla-${base}.txt creado`;
};
module.exports = { crearArchivo };
