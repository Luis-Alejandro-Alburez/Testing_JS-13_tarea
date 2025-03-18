//Utilice la propiedad .length para encontrar el último elemento de una matriz.
const matriz = [10, 20, 30, 40, 50];
const ultimoElemento = matriz[matriz.length - 1];
document.getElementById("matrizP").textContent = "la matriz es:" + matriz;
document.getElementById("resultado").textContent =
  "El último elemento de la matriz es: " + ultimoElemento;

//Tome todos los elementos de una matriz y cree una cadena.
const cadenaConGuion = matriz.join("-");
document.getElementById("cadenaGuion").textContent =
  "la cadena es:" + cadenaConGuion;

//Encuentra el valor de retorno de una llamada .push()a una matriz.
const nuevaLongitud = matriz.push(60, 70, 80);
document.getElementById("nuevaLongitudP").textContent =
  "la cadena es: " + matriz + " y tiene " + nuevaLongitud + " elementos";

//Anidar una matriz dentro de una matriz.
const nuevaMatriz = [90, 100, 110];
matriz.push(nuevaMatriz);
document.getElementById("matrizDentroDeMatriz").textContent =
  "la nueva matriz es: " +
  nuevaMatriz +
  " y la matriz original ahora es: " +
  matriz;
console.log(matriz);

//Acceder a un elemento de la matriz anidada.
const matrizCompleja = [10, 20, [30, 40, [50, 60, [70, 80]]]];
const valor = matrizCompleja[2][2][2][1];
console.log(valor); // Salida: 80
