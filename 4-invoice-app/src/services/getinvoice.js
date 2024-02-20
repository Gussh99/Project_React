import { invoice } from "../data/invoice"

export const getInvoice = () =>{
    //calcula el total de los item y se agreaga en la factura
    /*let total = 0;
    invoice.items.forEach(item => {
        total = total + item.price * item.quantity;
    });*/
    //hacer el calculo usando calback hace el calculo de sumar los precios de los item
    const total = invoice.items
        .map(item => item.price * item.quantity)//operacion de los precios
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return {...invoice, total};
}