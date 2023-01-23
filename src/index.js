/* Creacion de un arreglo-array el cual contiene una lista de Strings-mensajes
   Que queremos mostrar de forma aleatoria  */
const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
  ];
  
  /*Creacion de una funcion la cual nos va a permitir  obtener un mensaje del
    almacenado en el arreglo-se obtiene un mensaje y se muestra de manera 
    aleatoria*/
  const funnyCommit = () => {
    //messages[Math.floor(Math.random() * messages.length)] Algoritmo que Permite encontrar un
    //elemento dentro del array-arreglo, y asi estraer solo uno de ellos de forma 
    //aleatoria en este caso estamos implementando el uso de Marh.floor asi como el
    //uso de Math.random() para iterar sobre los elementos del arreglo, obtener un
    //un element sin pasarse de lo que contoene el arreglo-array
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    //Se muestra en consola un mensaje, con una estructura que permita mostrarse de 
    //forma correcta dentro de la consola de la computadora
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  /* Se hace una exportacion de la funcion funnyCommit para poderla utilizar
     y de esta forma podemos trabajar de forma correcta con nuetro proyecto */
  module.exports = {
    funnyCommit
  };