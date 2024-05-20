import { useEffect, useState } from "react";

export const FormItemsView = ({handler}) =>{
    const [formItemsState,setFormItemsState] = useState({
        product: '',
        price:'',
        quantity:'',
    });
    const {product, price, quantity} = formItemsState;

    useEffect(() =>{
        //console.log('Cambio de precio')
     } ,[price]);
 
     useEffect(() =>{
         //console.log('Cambio de formItemsState')
     } ,[formItemsState]);

       //se mejora para tomar los campos en una sola funcion en un solo estado
    const onInvoiceChange = ({target: {name, value}}) => {
        //console.log(name);
        //console.log(value);
        setFormItemsState({
            ...formItemsState,
            [name]:value
        })
    };

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

        handler(formItemsState);
        
        setFormItemsState({
            product: '',
            price: '',
            quantity:'',
        });

    };

    return (
        <>
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
        </>
    )
}