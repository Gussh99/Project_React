import { useState } from "react";
import { getInvoice } from "./services/getinvoice"
import { ClientView } from "./components/ClientView";
import { EmpresaView } from "./components/EmpresaView";
import { DetailView } from "./components/InvoiceDetailView";
import { ItemView } from "./components/ItemView";
import { TotalView } from "./components/TotalView";


export const InvoiceApp = () => {

    const {total,id,name, client, company, items:itemsInitial} = getInvoice();
    //se crea para registrar nuevos item
    const [productValuet, setProductValue] = useState('');
    const [pricetValuet, setPricetValue] = useState(0);
    const [quantityValuet, setQuantityValue] = useState(0);
    //para guardar los items
    const [items, setItems] = useState(itemsInitial);

    return (
        <>
            <div className="container my-3">
                <div className="card">
                    <div className="card-header">
                        <h1 className="card-title">Facturacion</h1>
                    </div>
                    <div className="card-body">
                        <DetailView id={id} name={name} />
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Datos del cliente" client={client}/>
                            </div>
                            <div className="col">
                                <EmpresaView title="Datos de la empresa" company={company}/>
                            </div>
                        </div>
                        <ItemView title="Productos de la empresa" items={items} />
                    </div>
                    <div className="card-footer">
                        <TotalView title= "Total de Compra:" total={total}/>
                    </div>
                </div>

                <form className="align-items-center card my-3" onSubmit={ event =>{
                    event.preventDefault();
                    setItems([...items, {
                        product:productValuet,
                        price:pricetValuet,
                        quantity:quantityValuet
                    }])
                }}>
                    <h3>Nuevo Item</h3>
                    <div className="row my-3">
                        <div className="col-6">
                            <input 
                            className="form-control" 
                            type="text" name="product" 
                            placeholder="Producto" onChange={event => {
                                console.log(event.target.value);
                                setProductValue(event.target.value);
                            }} />
                        </div>
                        <div className="col-3">
                            <input 
                            className="form-control" 
                            type="number" 
                            name="price" 
                            placeholder="$Preio" onChange={event => {
                                console.log(event.target.value);
                                setPricetValue(event.target.value);
                            }} />
                        </div>
                        <div className="col-3">
                            <input className="form-control"
                            type="number" 
                            name="quantity" 
                            placeholder="Cantidad" onChange={event => {
                                console.log(event.target.value);
                                setQuantityValue(event.target.value);
                            }} /> 
                        </div>
                    </div>
                    <div className="my-3">
                        <button type="sumit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </>
    )

}