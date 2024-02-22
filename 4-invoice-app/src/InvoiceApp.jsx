import { useState } from "react";
import { getInvoice } from "./services/getinvoice"
import { ClientView } from "./components/ClientView";
import { EmpresaView } from "./components/EmpresaView";
import { DetailView } from "./components/InvoiceDetailView";
import { ItemView } from "./components/ItemView";
import { TotalView } from "./components/TotalView";


export const InvoiceApp = () => {

    const {total,id,name, client, company, items:itemsInitial} = getInvoice();

    const [formItemsState,setFormItemsState] = useState({
        product: '',
        price:'',
        quantity:'',
    });
    const {product, price, quantity} = formItemsState;
    /*se crea para registrar nuevos item
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');*/
    //para guardar los items
    const [items, setItems] = useState(itemsInitial);
    //usa para el contador del id iniciando en 4 porque ya se tiene 3 registros
    const [counter, setCounter] = useState(4);
    //se mejora para tomar los campos en una sola funcion en un solo estado
    const onInvoiceChange = ({target: {name, value}}) => {
        console.log(name);
        console.log(value);
        setFormItemsState({
            ...formItemsState,
            [name]:value
        })
    };
    /*const onProductChange = ({target}) => {
        console.log(target.value);
        setProductValue(target.value);
    };

    const onPriceChange = ({target}) => {
        console.log(target.value);
        setPriceValue(target.value);
    };
    const onQuantityChange = (event) => {
        console.log(event.target.value);
        setQuantityValue(event.target.value);
    };*/
    
    const onInvoiceItemSubmit = (event) => {
        event.preventDefault();
        //se realizan las validaciones del formulario
        if(product.trim().length <= 1) return;
        if(price.trim().length <= 1) {
            alert('El campo de ser de 2 digito')
            return
        };
        if(isNaN(price.trim())) {
            alert('No es un numero '+price)
            return;
        }
        if(quantity.trim().length < 1) return;
        if(isNaN(quantity.trim())) return;
        
        setItems([...items, {
            id:counter,
            product:product.trim(),//el trim() funciona para quitar los espacios
            //covertir enetero con el signo +
            price:+price.trim(),
            //convertir entero con parseInt
            quantity:parseInt(quantity.trim(), 10)
        }]);
        setFormItemsState({
            product: '',
            price: '',
            quantity:'',
        });
        setCounter(counter+1);

    };
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

                <form className="align-items-center card my-3" onSubmit={ onInvoiceItemSubmit }>
                    <h3>Nuevo Item</h3>
                    <div className="row my-3">
                        <div className="col-6">
                            <input 
                            className="form-control" 
                            type="text" 
                            name="product" 
                            value={product}
                            placeholder="Producto" 
                            onChange={ onInvoiceChange } />
                        </div>
                        <div className="col-3">
                            <input 
                            className="form-control" 
                            type="text" 
                            name="price" 
                            value={price}
                            placeholder="$Preio" 
                            onChange={onInvoiceChange} />
                        </div>
                        <div className="col-3">
                            <input className="form-control"
                            type="number" 
                            name="quantity" 
                            value={quantity}
                            placeholder="Cantidad" 
                            onChange={ event => onInvoiceChange(event)} /> 
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