import PropTypes from 'prop-types'
export const EmpresaView = ({ title, company}) =>{
    return(
        <>
             <h3 className="card-title">{title}</h3>
            <ul>
                <li>{ company.name }</li>
                <li> { company.fisicaNumber } </li>
            </ul>
        </>
    )
}

EmpresaView.propTypes ={
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
}