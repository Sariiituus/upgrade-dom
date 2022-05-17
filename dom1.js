// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let btnShowMe = document.querySelector(".showme");
console.log('Ejercicio 1.1');
console.log(btnShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let h1Pillado = document.querySelector("#pillado");
console.log('Ejercicio 1.2');
console.log(h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
let allP = document.querySelectorAll("p");
console.log('Ejercicio 1.3');
console.log(allP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let allElementsWithPokemonClass = document.querySelectorAll(".pokemon");
console.log('Ejercicio 1.4');
console.log(allElementsWithPokemonClass);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
let allElementsWithAttrFunctionTestMe = document.querySelectorAll("[data-function='testMe']");
console.log('Ejercicio 1.5');
console.log(allElementsWithAttrFunctionTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe" */
let thirdWithAttrFunctionTestMe = document.querySelectorAll("[data-function='testMe']")[2];
console.log('Ejercicio 1.6');
console.log(thirdWithAttrFunctionTestMe);
