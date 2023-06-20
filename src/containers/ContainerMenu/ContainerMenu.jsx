import { Link } from "react-router-dom"
import { useGetProducts } from "../../hooks/useGetProducts";

const ContainerMenu = () => {
    const products = useGetProducts()
    console.log(products)
    return(
        <div className="container-menu">
            <div className="menu-title">
                <p>¡Disfrútalos!</p>
                <h2>Conoce nuestras bebidas y alimentos de temporada</h2>
            </div>
            <div className="menu-products">
                <div className="container-categories">
                    <p className="categories-title">Bebidas</p>
                    <div className="grid-products">
                        <Link to='/menu/bebidas/cafes-calientes'>
                            <div className="product">
                                <img src="/assets/img/bebidas/cafes-calientes.png" alt="cafés calientes" />
                                <p>Cafés Calientes</p>
                            </div>
                        </Link>
                        <Link to='/menu/bebidas/cafes-helados'>
                            <div className="product">
                                <img src="/assets/img/bebidas/cafes-helados.png" alt="cafes helados" />
                                <p>Cafés Helados</p>
                            </div>
                        </Link>
                        <Link to='/menu/bebidas/frappuccino'>
                            <div className="product">
                                <img src="/assets/img/bebidas/frappuccino.png" alt="frappuccino" />
                                <p>Frappuccino</p>
                            </div>
                        </Link>
                        <Link to='/menu/bebidas/te-calientes'>
                            <div className="product">
                                <img src="/assets/img/bebidas/te-caliente.png" alt="te caliente" />
                                <p>Té caliente</p>
                            </div>
                        </Link>
                        <Link to='/menu/bebidas/heladas'>
                            <div className="product">
                                <img src="/assets/img/bebidas/heladas.png" alt="heladas" />
                                <p>Heladas</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="container-categories">
                    <p className="categories-title">Comida</p>
                    <div className="grid-products">
                        <Link to='/menu/comida/bakery'>
                            <div className="product">
                                <img src="/assets/img/comidas/bakery.png" alt="bakery" />
                                <p>Bakery</p>
                            </div>
                        </Link>
                        <Link to='/menu/comida/snacks'>
                            <div className="product">
                                <img src="/assets/img/comidas/snacks.png" alt="snacks" />
                                <p>Snacks</p>
                            </div>
                        </Link>
                        <Link to='/menu/comida/almuerzos'>
                            <div className="product">
                                <img src="/assets/img/comidas/almuerzos.png" alt="almuerzos" />
                                <p>Sándwichs & preparados</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="container-categories">
                    <p className="categories-title">En casa</p>
                    <div className="grid-products">
                        <Link to='/menu/en-casa/cafe-en-granos'>
                            <div className="product">
                                <img src="/assets/img/en-casa/cafe-en-granos.png" alt="cafe-en-granos" />
                                <p>Café en granos</p>
                            </div>
                        </Link>
                        <Link to='/menu/en-casa/te'>
                            <div className="product">
                                <img src="/assets/img/en-casa/te.png" alt="te" />
                                <p>Té</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerMenu