const fs = require("fs");

console.clear(); // para limiar consola
console.log("***********************************");
console.log("       Tabla de multiplicar  ");
console.log("***********************************");

const base = 3;
let salida = "";

for (let i = 1; i <= 10; i++) {
  console.log(`${base} x ${i} = ${base * i}`);
  salida += `${base} x ${i} = ${base * i}\n`;
}
fs.writeFileSync(`tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`Tabla-${base}.txt creado`);
});
