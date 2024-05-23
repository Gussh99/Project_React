import { NavLink } from "react-router-dom"
import { autoPlay, stopPlay, linkCcolorA  } from "../services/funcion"
import CarImg from "../assets/img/carro-de-la-compra-unscreen.mp4"
import "../styles.css"

export const Navbar = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-color border-bottom">
            <div className="container-fluid">
                <a className="color-nav-title" href="#">CartApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end my-2" id="navbarNav">
                <ul className="nav">
                    <li className="nav-item my-2">
                        <NavLink style={linkCcolorA} className="linkcolor" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item my-2">
                        <NavLink style={linkCcolorA} className="linkcolor" to="/catalog">Catalogo</NavLink>
                    </li>
                    <li className="nav-item my-2">
                        <NavLink style={linkCcolorA}  to="/cart">
                            <video onMouseEnter={autoPlay}  onMouseLeave={stopPlay} muted loop className="car-video" id="car-video">
                                <source src={CarImg} type="video/mp4" />
                            </video>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}