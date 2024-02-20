export const invoice = {
    id:10,
    name:'Factura de compras de electronicos',
    client:{
        name:'Gustavo',
        lastname:'Vela',
        address:{
            country:'Mex',
            city:'Puebla',
            stree:'Calle 5 Norte',
            number:10
        },
    },
    company:{
        name:'Coppel',
        fisicaNumber:90308578,
    },
    items:[
        {
            id:1,
            product:'Laptop Gammer',
            price:1500,
            quantity:1,
        },
        {
            id:2,
            product:'Mochila para laptop',
            price:100,
            quantity:5,
        },
        {
            id:3,
            product:'iPad Pro 4th generacion',
            price:1200,
            quantity:2,
        },
    ]
}