/* EJERCICIO DE FUNCIONES JAVASCRIPT */

const celsiusList = [39, 23, 4, 5, 10, 15];

let newFahrenheitList = [];

// Convertir y retornar una lista de C° a F° con una función normal //
function celsiusToFahrenheit (listaTemp){
    let newTemperatures = [];

    for (let x of listaTemp) {
        newTemperatures.push(x * 1.8 + 32);
    }
    return newTemperatures;
}

// DESCOMENTAR PARA LLAMAR A LA FUNCIÓN
// console.log(celsiusToFahrenheit(celsiusList));



// Convertir de C° a F° y agregar el resultado a una nueva lista, usando una función anónima //

/// Descomentar para que funcione ///

// celsiusList.forEach((x)=> newFahrenheitList.push(x * 1.8 + 32));
// console.log(newFahrenheitList);


// Convertir de C° a F° y agregar el resultado a una nueva lista, utilizando el metodo MAP, mediante
// una función anónima

let allTemperatures = [];

allTemperatures = celsiusList.map((x)=> x * 1.8 + 32);
celsiusList.forEach((item, i)=> 
        (console.log("Valor " + (i+1) + "=" + item ))
        );


// /// Descomentar para que funcione ///

console.log(celsiusList);
console.log(allTemperatures);

// Convertir de C° a F° los valores de una lista, usando un ciclo FOR OF, y guardar el resultado en una nueva lista,
// además muestra las temperaturas anteriores y las convertidas.

function funcionNormal(lista){
    let indice = 1;
    let calculo;
    for (let x of lista) {
        calculo = x * 1.8 + 32
        console.log("Posición " + indice + " Temperatura anterior: " + x + ", Temperatura nueva: " + calculo);
        indice++;
        allTemperatures.push(calculo);
    } 
      console.log(allTemperatures);
}

// /// Descomentar para llamar a la función anterior ///
// funcionNormal(celsiusList);