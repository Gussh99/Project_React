import { useEffect, useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { products } from "./data/productos"

//Objecto de los elemento del carrito
const inititalCartItem = JSON.parse(sessionStorage.getItem('cart')) || [];

export const  CartApp = () => {


    const [cartItems, setCartItems] = useState(inititalCartItem);

    

    const handlerAddProductCart = (product) =>{
        //Para buscar si ya existe un registro con el id solo incrementa el numero de elementos
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if(hasItem){
            /*setCartItems([
                ...cartItems.filter( (i) => i.product.id !== product.id),
                {
                    product,
                    quantity:hasItem.quantity + 1,
                }
            ])*/
            setCartItems([
                ...cartItems.map( (i) => {
                    if(i.product.id === product.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                }),
            ])
        }else{
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity:1,
                }
            ]);
        }
    }

    const handlerDeleteProduct = (id) => {
        setCartItems([
            ...cartItems.filter( (i) => i.product.id !== id)
        ])
    }
    return (
        <>
        <div className="container my-4">

            <h3>Carrito de compras</h3>
            <CatalogView handler={handlerAddProductCart}/>

            {/*Muestra si la lista de compras tiene elementos*/}
            {cartItems?.length <= 0 || 
                (
                   <div className="my-4 w-50">
                       <CartView items={cartItems} handlerDelete={handlerDeleteProduct}/>
                   </div>
                )
            }
        </div>
        </>
    )
}