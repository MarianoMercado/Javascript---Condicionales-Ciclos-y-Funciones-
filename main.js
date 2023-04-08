// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function ParImpar(numero) {

    if (numero %2 ===0) {
        console.log(`EL número ${numero} es par`);
        
    } else {
        console.log(`EL número ${numero} es impar`);
    }
    
}

ParImpar(3)


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales

function NumeroMayor(numero1,numero2) {

    if (numero1 > numero2) {
        console.log(`EL número ${numero1} es mayor`);
    }else if (numero2 > numero1) {
        console.log(`EL número ${numero2} es mayor`);
    } else {
        console.log(`Los números ingresados sin iguales`);
        
    }
    
}

NumeroMayor(2,2)


//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function MultiploDeCinco(numero) {
    if (numero %5 === 0) {
        console.log(`EL número ${numero} es múltiplo de 5`);
    }
}

MultiploDeCinco(60)

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function ContadorNumeros(numero) {

    for (let index = 0; index <= numero; index++) {
        console.log(index);
        
    }    
}

ContadorNumeros(5)


//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function PalabraYnumero(palabra,numero) {

    for (let index = 1; index <= numero; index++) {

        console.log(palabra);        
    }
    
}
PalabraYnumero("Mariano",3)

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let Abecedario = ["A","B","C","D","E","F"]

function ArrayAbecedario(array) {

    for (let index = 0; index < array.length; index++) {
        
    console.log(array[index]);
        
    }
    
}
ArrayAbecedario(Abecedario)

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


let Numeros = [1,2,3,4,5,6,7,8,9,10]

function ArrayNumeros(array) {

    for (let index = 0; index < array.length; index++) {
        
        if (array[index] === array[4]) {
            continue
            
        }
        else{
            console.log(array[index]);
        }
        
    }
    
}

ArrayNumeros(Numeros)

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.


function ArrayMultiplicado(array,numero) {
    
    for (let index = 0; index < array.length; index++) {
        
        console.log(`${array[index]} x ${numero} es ${array[index] * numero}`);
        
    }
}

ArrayMultiplicado(Numeros,5)