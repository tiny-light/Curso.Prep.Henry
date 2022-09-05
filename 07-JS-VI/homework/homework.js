// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  // var nuevoNombre = nombre[0].toUpperCase() + nombre.substring(1)
  // return nuevoNombre
  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2)
  // igual al anterior pero con numeros en la funcion
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var total = 0;
  for(let i =0; i < numeros.length; i++){
    total= total + numeros[i];
  }
  cb(total)
}
//var sumaTotal = numeros.reduce((a, b) => (a + b), 0);
//cb(sumaTotal);

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //for(var i = 0; i < array.length; i++) {
  //cb(array[i]);
  //}
  array.forEach(function(a){
    cb(a)
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var newArray = array.map(function(elemento){
    // si o si retornar algo usando map
    return cb(elemento) //va al almacenando todo lo que retorna en el array que el map va creando
  })
  return newArray;
  //return array.map
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var anotherArray = array.filter(function(elemento){
    return elemento[0] === "a"
  })
  return anotherArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
