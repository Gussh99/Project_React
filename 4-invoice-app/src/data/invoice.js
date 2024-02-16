export const invoice = {
    id:10,
    name:'Compra 1',
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
            product:'Laptop Gammer',
            price:1500,
            quantity:1,
        },
        {
            product:'Mochila para laptop',
            price:100,
            quantity:1,
        },
        {
            product:'iPad Pro 4th generacion',
            price:1200,
            quantity:1,
        },
    ]
}