#!/usr/bin/env node
/* Se genera una instruccion para indicarle que este archivo va a funcionar del lado
   de node, asi como tambien hacer el import del modulo que acabamos de crear
   index.js y luego ejecutar la funcion que vendria siendo lo que se encuentra dentro
   En este caso la que utiliza el array, para extraer un mensaje de forma aleatoria y
   poderlo mostrar en consola
   */
let random = require('../src/index.js');

random.funnyCommit();