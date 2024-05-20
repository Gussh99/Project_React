export const CartView = () =>{

    return(
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>nombre</td>
                        <td>precio</td>
                        <td>cantidad</td>
                        <td>total</td>
                        <td>eliminar</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">3456</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}