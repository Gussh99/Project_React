import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { useItemsCar } from "./hooks/useItemsCart"

export const  CartApp = () => {

    const {cartItems,handlerAddProductCart,handlerDeleteProduct} = useItemsCar();
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