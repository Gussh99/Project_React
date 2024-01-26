const products = ['mesa','silla','notebook','teclado'];
products.push('pantalla lcd','sony radio');
console.log(products);
console.log('------------------------------------------------------------------');
products.forEach((el) => console.log(el))
console.log('------------------------------------------------------------------');
for (const prod of products) {
    console.log(prod);
}
console.log('------------------------------------------------------------------');
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element);
}
console.log('------------------------------------------------------------------');
console.log(products[0]);