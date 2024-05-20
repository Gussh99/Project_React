import { RowItem } from "./RowItem"
import PropTypes from 'prop-types'
export const ItemView = ({title, items, handlerDeleteItem}) =>{
    return(
        <>
            <h4 className="title">{title}</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th className='text-center'>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {/**
                     * iteracion de los item
                     * de uno en uno
                    */}
                    { items.map(({id, product, price, quantity}) => {
                        return (
                            <RowItem 
                                key={id} 
                                id={id}
                                product={product} 
                                price={price} 
                                quantity={quantity}
                                handlerDeleteItem={ id => handlerDeleteItem(id) }
                            />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

ItemView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array
}
