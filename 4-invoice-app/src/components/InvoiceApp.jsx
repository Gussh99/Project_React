import { getInvoice } from "../services/getinvoice"

export const InvoiceApp = () => {

    const {id, name, client, company, item} = getInvoice();
    const { name:nameClient, lastname, address } = client;
    const { country, city, stree, number } = address;
    return (
        <>
            <h1>Facturacion</h1>
            <ul>
                <li>Id: { id }</li>
                <li>Nombre: { nameClient }</li>
            </ul>
            <h3>Datos del cliente</h3>
            <ul>
                <li>{ name } { lastname }</li>
                <li>{ stree } { number } { city } { country }</li>
            </ul>
        </>
    )

}