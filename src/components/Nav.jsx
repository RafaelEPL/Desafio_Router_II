import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <Navbar 
        className="d-flex justify-content-between px-5"
        variant="light"
        style={{ background: "#58585a" }}>
            <Navbar.Brand>
                <img
                width="50"
                src="/poke-icon.svg"
                 alt="Icono" />
            </Navbar.Brand>
            <div>
                <NavLink
                className={({ isActive }) => (isActive ? "active me-3" : "me-3")}
                to="/"
                >
                    Home
                </NavLink>
                <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/pokemones"
                >
                    Pokemons 
                </NavLink>
            </div>
        </Navbar>
    )
}

export default Nav;