import PropTypes from 'prop-types'
export const DetailView = ({id, name}) =>{
    return (
        <>
             <ul className="list">
                <li>Id: { id }</li>
                <li>Nombre: { name }</li>
            </ul>
        </>
    )
}

DetailView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}