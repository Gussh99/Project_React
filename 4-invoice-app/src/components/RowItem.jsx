import PropTypes from 'prop-types'
export const RowItem = ({product, price, quantity}) =>{
    return(
        <>
            <tr>
                <td>{ product }</td>
                <td>{ price }</td>
                <td className='text-center'>{ quantity }</td> 
            </tr>
        </>
    )
}
//requerimeintos y tipos de campos del json
RowItem.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}