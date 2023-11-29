
//Creamos una función que recibe como parámetro una URL

function fetchData(url){

    // Creamos una nueva promesa, y dentro de su constructor, creamos un setTimeOut
    const promesa = new Promise((myResolve, myReject)=>{
        setTimeout(()=>{
            //Dentro de los parámetros del setTimeOut, le ponemos el tiempo (al final) y creamos una función anónima
            //donde generamos un número aleatorio, y con un if, si ese número 
            //es menor a 50, respondemos con myResolve, de lo contrario, damos el mensaje de error, con myReject
            const numRandom = Math.floor(Math.random() * 100);
            console.log(numRandom);
            if (numRandom < 50) {
                myResolve({
                    "name": "C-3PO",
                    "height": "167",
                    "mass": "75",
                    "hair_color": "n/a",
                    "skin_color": "gold",
                    "eye_color": "yellow",
                    "birth_year": "112BBY"})
            } else {
                myReject("Error 404. Not found")
            }

        }, 2000)
    })
 //Retornamos la promesa
    return promesa;
}

//Asignamos la respuesta retornada a una variable, a la que llamamos resultado
const resultado = fetchData("url");

//Y luego, manejamos la respuesta de la promesa, con un .then o con un .catch para capturar el error
resultado.then(
    (respuesta)=>{ console.log(respuesta);
    }
)
.catch(
(error)=> {
    console.log(error);
}
);



