// No cambies los nombres de las funciones.


  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
function deObjetoAmatriz(objeto){
  var matriz = [];
  for(var property in objeto){
    matriz.push([property, objeto[property]]);
  }
    return matriz;
}

//La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
//en formato par clave-valor.
//Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
//Escribe tu código aquí
function numberOfCharacters(string) {
  resultado = {}
  for(let cantidad in string){
	if(string[cantidad] in resultado) {
		resultado[string[cantidad]] = resultado[string[cantidad]] + 1
	} else {
		resultado[string[cantidad]] = 1
    }
}
return resultado;
}

  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
function capToFront(s) {
  var strUpper = "";
  var strLower = "";
  for (let i in s){
    if(s[i] === s[i].toUpperCase()){
      strUpper = strUpper + s[i];
    } else {
      strLower = strLower + s[i];
    }
  }
  return strUpper+strLower;
}

  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
function asAmirror(str) {
    var stringInvertida = '';
    for(var i = str.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + str.charAt(i);
    }
    var array = stringInvertida.split(" ");
    var reversed = array.reverse();
    return reversed.join(" ");
}

  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
function capicua(numero){
  var numInvertido = parseInt(String(numero).split("").reverse().join(""));
  if (numero === numInvertido){
    return "Es capicua";
  } else { 
    return "No es capicua"
  }
}

  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
function deleteAbc(cadena){
  var re = /a|b|c/gi;
  var nuevaCadena = cadena.replace(re,"");
  return nuevaCadena;
}

  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
function sortArray(arr) {
  var newArray = [];
  for(var i in arr){
    newArray.push(arr[i].length);
  }
  newArray.sort(function(a, b){return a - b});
  const newArray2 = newArray.reduce((newTempArr, el) => (newTempArr.includes(el) ? newTempArr : [...newTempArr, el]), [])
  // return newArray2;
  var arrayFinal = [];
  for (var i in newArray2){
    for (var x in arr){
      if(arr[x].length === newArray2[i]){
        arrayFinal.push(arr[x])
        }
      }
    }
    return arrayFinal;
  }
  
  // var maximo = newArray[0];
  // var creciente = [];
  
  // for(var i in newArray) {
  //   if(newArray[i] > maximo) { 
  //     maximo = newArray[i];
  //     creciente.push(maximo);
      
  //   }
  // }
  // return creciente;



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

