
const Footer = () => {
    return (
        <div className="container-footer">
            <div className="container-about">
                <div className="about">
                    <p className="about-title">Sobre nosotros</p>
                    <ul>
                        <li>
                            <a href="#">Nuestra historia</a>
                        </li>
                        <li>
                            <a href="#">Nuestra misión</a>
                        </li>
                        <li>
                            <a href="#">Nuestro café</a>
                        </li>
                        <li>
                            <a href="#">Historias y novedades</a>
                        </li>
                    </ul>
                </div>

                <div className="about">
                    <p className="about-title">Impacto social</p>
                    <ul>
                        <li>
                            <a href="#">Planeta</a>
                        </li>
                        <li>
                            <a href="#">Personas</a>
                        </li>
                    </ul>
                </div>

                <div className="about">
                    <p className="about-title">Atención al cliente</p>
                    <ul>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                        <li>
                            <a href="#">Medio de pago</a>
                        </li>
                        <li>
                            <a href="#">Defensa de las y los consumidores</a>
                        </li>
                    </ul>
                </div>

                <div className="about">
                    <p className="about-title">Experiencia Coffee</p>
                    <ul>
                        <li>
                            <a href="#">Formas de comprar</a>
                        </li>
                        <li>
                            <a href="#">Delivery</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-links">
                <img src="/assets/img/icon-fb.svg" alt="#" />
                <img src="/assets/img/icon-ig.svg" alt="#" />
                <img src="/assets/img/icon-in.svg" alt="#" />
            </div>
            <div className="container-copyright">
                <p>Ⓒ 2023. Coffee Company. Reservados todos los derechos</p>
            </div>
        </div>
    )
}

export default Footer