import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions"

//Objecto de los elemento del carrito
const inititalCartItem = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCar = () =>{


    //const [cartItems, setCartItems] = useState(inititalCartItem);
    //Usando el reducer para las acciones de los elementos del carrito
    const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItem);

    useEffect(() =>{
        //Matiene la sesion con los elemntos selecionas en el carrito
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
        //Mantine los elementos aun cerrando la sesion en el carrito
        //localStorage.setItem('cart', JSON.stringify(items));
    } ,[cartItems]);
    

    const handlerAddProductCart = (product) =>{
        //Para buscar si ya existe un registro con el id solo incrementa el numero de elementos
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if(hasItem){
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
        }else{
            dispatch(
                {
                    type: AddProductCart,
                    payload: product,
                }
            );
        }
    }

    const handlerDeleteProduct = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        );
    }
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProduct,
    }
}