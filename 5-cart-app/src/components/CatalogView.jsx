import { useEffect, useState } from "react";
import { getProducts } from "../services/productService"
import { ProductCardIView } from "./ProductCardIView";
export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([])


    useEffect(
        () => {
            setProducts(getProducts());
    }, []);
    return (
        <>
            <div className="row">
                {/*Lista para iterar la lista de productos*/}
               {products.map(prod => {
                    return(
                        <div className="col-4 my-2" key={ prod.id }>
                            <ProductCardIView 
                            handler={ handler }
                            id={prod.id} 
                            name={prod.name} 
                            description={prod.description} 
                            price={prod.price} />
                        </div>
                    )
               })} 
            </div>
        </>
    )
}