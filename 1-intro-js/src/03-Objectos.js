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

//invoice.client.name = 'Pepe'
//invoice.total = 5000;
console.log(invoice);
const greeting =invoice.greeting();
console.log(greeting);
console.log(`Total ${invoice.total()}`);

