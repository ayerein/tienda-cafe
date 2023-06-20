import { Link } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";

const Nav = () => {
    return (
        <header>
            <nav className="container-nav">
                <div className="logo">
                    <Link to='/' >
                        <img src="/assets/coffee-icon.png" alt="logo coffee" width="50px" />
                    </Link>
                </div>
                <div className="nav">
                    <Link to='menu' className="nav-a">
                        MENÚ
                    </Link>
                    <Link to='cafe' className="nav-a">
                        CAFÉ
                    </Link>
                    <Link to='exp' className="nav-a">
                        EXPERIENCIA COFFEE
                    </Link>
                </div>
                <div className="search">
                    <Link to='search'>
                        <FaMapMarkerAlt />ENCUENTRA TU TIENDA
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav