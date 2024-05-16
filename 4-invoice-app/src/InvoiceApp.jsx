import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getinvoice"
import { ClientView } from "./components/ClientView";
import { EmpresaView } from "./components/EmpresaView";
import { DetailView } from "./components/InvoiceDetailView";
import { ItemView } from "./components/ItemView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";


const invoiceInitial = {
    id:0,
    name:'',
    client:{
        name:'',
        lastname:'',
        address:{
            country:'',
            city:'',
            stree:'',
            number:0
        },
    },
    company:{
        name:'',
        fisicaNumber:0,
    },
    items:[]
    
}

export const InvoiceApp = () => {

    //accion para boton de ocultar y mostrar form
    const [activeForm, setActiveForm] = useState(false);

    const [total, setTotal] = useState(0);
    //usa para el contador del id iniciando en 4 porque ya se tiene 3 registros
    const [counter, setCounter] = useState(4);

    const [invoice, setInvoice] =  useState(invoiceInitial);
    //para guardar los items
    const [items, setItems] = useState([]);

 
    //factura desestructuracion
    const {id,name, client, company} = invoice;

    

    useEffect(() =>{
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items)
    }, []);



    useEffect(() =>{
        //console.log('El counter cambio')
    } ,[counter]);

    //calcula el total de los productos una vez que se van agregando
    useEffect(() =>{
        setTotal(calculateTotal(items))
    } ,[items]);
    /*se crea para registra
    /*se crea para registrar nuevos item
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');*/

  
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
    
    const handlerAddItems = ({product,price,quantity}) => {
        
        setItems([...items, {
            id:counter,
            product:product.trim(),//el trim() funciona para quitar los espacios
            //covertir enetero con el signo +
            price:+price.trim(),
            //convertir entero con parseInt
            quantity:parseInt(quantity.trim(), 10)
        }]);

        setCounter(counter+1);

    };
     //accion para boton de eliminar registros o items
    const handlerDeleteItem = (id) =>{
        setItems(items.filter(item => item.id != id))
    }

     //accion para boton de ocultar y mostrar form
    const onActiveForm = () =>{
        setActiveForm(!activeForm);
    }
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
                        <ItemView title="Productos de la empresa" items={items} handlerDeleteItem={ id => handlerDeleteItem(id) } />
                    </div>
                    <div className="card-footer">
                        <TotalView title= "Total de Compra:" total={total}/>
                    </div>
                </div>
                {/*Boton para ocultar el formulario y mostrar*/}
                <button className="btn btn-secondary mt-3"
                onClick={ onActiveForm}>{  !activeForm ? 'Agregar Item' : 'Ocultar Fromulario'}</button>
                {/* puede ser asi */}
                { /* {!activeForm ? '' : <FormItemsView handler={handlerAddItems}/>}*/ }
                {/* o de esta forma*/}
                { !activeForm || <FormItemsView handler={handlerAddItems}/> }
                
                
            </div>
        </>
    )

}