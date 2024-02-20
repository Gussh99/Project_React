import PropTypes from 'prop-types'
export const ClientView = ({title,client}) =>{
    {/*
            puede ser asi tambien
            const { name:nameClient, lastname, address } = client;
            const { country, city, stree, number } = address;
    */}
    const { name:nameClient, lastname, address:{ country, city, stree, number } } = client;
    return(
        <>
                <h3 className="card-title">{title}</h3>
                <ul>
                    <li>{ nameClient } { lastname }</li>
                    <li>{ stree } { number } { city } { country }</li>
                </ul>
        </>
    )
}
ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client:PropTypes.object.isRequired
}