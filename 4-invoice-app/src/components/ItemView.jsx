import { RowItem } from "./RowItem"
import PropTypes from 'prop-types'
export const ItemView = ({title, items}) =>{
    return(
        <>
            <h4 className="title">{title}</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th className='text-center'>Cantidad</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {/**
                     * iteracion de los item
                     * de uno en uno
                    */}
                    { items.map(item => {
                        return (
                            <RowItem key={item.id} product={item.product} price={item.price} quantity={item.quantity}/>
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
