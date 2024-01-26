//funcion normal en un constante
const sayHello = function (name = 'El valor no tiene un nombre', age=0){
    const greeting= `Hola function! ${name} ${age}`;

    //console.log('Hola function!');
    return greeting;
}

const resultado = sayHello('Gustavo',10);

console.log(resultado);

//funcion flecha puede usar en una sola linea cunado solo devuelve algo pero cuando son mas se usan las llaves y return
const sayHello1 = (name = 'No hay name', age=0) => `Hola function flecha! ${name} ${age}`;
const suma = (a = 0, b=0) => `La suma de ${a}+${b}=`+(a+b);


const resultado1 = sayHello1('Gustavo',10);

console.log(resultado1);
console.log(suma(5,10));