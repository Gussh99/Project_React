import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { useItemsCar } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar";


export const  CartApp = () => {

    const {cartItems,handlerAddProductCart,handlerDeleteProduct} = useItemsCar();
    return (
        <>
        <Navbar />
        <div className="container my-4">
        <h3>Carrito de compras</h3>
            <Routes>
                <Route 
                    path="catalog" 
                    element={<CatalogView handler={handlerAddProductCart}/>}
                />
                {/*Muestra si la lista de compras tiene elementos*/}
                <Route 
                    path="cart" 
                    element={(
                        cartItems?.length <= 0 ? (
                            <div className="container text-center card-size">
                                <div className="alert alert-light">
                                    <h3>Upps</h3>
                                    <video autoPlay loop muted className="video-size">
                                        <source src="https://cdn-icons-mp4.flaticon.com/512/9197/9197782.mp4"/>
                                    </video>
                                    <div className="d-grid gap-2 col-2 mx-auto">
                                        <a className="btn btn-primary " href="/catalog">Comprar</a>
                                    </div>
                                    <p className="my-2">Todavia no tienes productos en tu carrito agrega articulos a el para comprar...</p>
                                </div>
                            </div>
                            ) : (
                            <div className="my-4 w-50">
                                <CartView items={cartItems} handlerDelete={handlerDeleteProduct}/>
                            </div>
                        )
                    )}
                />

                <Route path="/" element={ <Navigate to={'/catalog'}/>}/>

            </Routes>      
        </div>
        </>
    )
}