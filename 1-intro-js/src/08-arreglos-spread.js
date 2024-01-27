const products = ['mesa','silla','notebook','teclado'];
const products2 = products.concat(['pantalla lcd','sony radio']);
const fruits = ['peras','manzanas','sandias','cocos','naranjas']
const mercado = [...products2, ...fruits, 'lechuga','papas','uvas'];
const mercado2 = products2.concat(fruits).concat('lechuga','papas','uvas');

console.log(products2);
console.log('------------------------------------------------------------------');
console.log(mercado);
console.log('------------------------------------------------------------------');
console.log(mercado2);
