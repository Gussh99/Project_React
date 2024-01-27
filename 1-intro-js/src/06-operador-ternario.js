const average = 4.9;
let statuss = '';
statuss = (average >= 5.5) ? 'Aprobado' : 'Rechazado';
console.log(`Resultado: ${statuss}`)
if(average >= 5.5){
    statuss = 'Aprobado';
}else{
    statuss = 'Rechzado';
}

console.log(`Resultado: ${statuss}`);

let max = 0;
const a = 5;
const b = 8;
const c = 3;

max = a > b ? a : b;
max = max > c ? max : c;
console.log(`El numero mayor es: ${max}`);