const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id:2,
        name: 'Jhon',
        lastname: 'Doe',
        age: 20,
    },
    items: [
        {
            producto: 'keyboars',
            price: 200,
            quantity: 4,
        },
        {
            producto: 'Mouse',
            price: 599,
            quantity: 2,
        },
        {
            producto: 'SmartPhone',
            price: 7499,
            quantity: 1,
        },
    ],
    total: function (){
        let total=0;
        this.items.forEach(items =>{
            total = total + items.price*items.quantity
        });
        return total;

    },
    //greeting: () =>{
        //return `Hola ${invoice.client.name}`;
    //}    
    greeting: function(){
        return `Hola ${this.client.name}`;
    }
};
//operador SPREAD EN OBJECTOS
//const invoice2 = invoice;
const invoice2 = { ...invoice };
const result = invoice ===invoice2;
 if(result){
    console.log(result)
}else {
    console.log('no son iguales')
}

invoice2.id=20;

console.log(invoice.id);
console.log(invoice2.id);