export const TotalView = (total) =>{
    return (
        <>
            <div className="position-relative row table-group-divider">
                <div className="text-end col-9">
                    <h1>{total.title}</h1>
                </div>
                <div className=" text-center col-3">
                    <span className="fs-2">${total.total}</span>
                </div>
            </div>
        </>
    )
}