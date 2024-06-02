import Link from "next/link"
import "@/app/styles/styleMenu.css"

// componente MENU PRINCIPAL

function Menu() {
    return (
        <nav className="menu">
            <Link className="link" href="/">
                <h2 className="menu__title">Logo</h2>
            </Link>
            <ul className="menu__list">
                <li className="menu__item menu__item--main">
                    {/* etiqueta link reemplaza a al etiqueta a  */}
                    <Link className="menu__link menu__link--main" href="/">Home</Link>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" href="/category">
                        Category
                    </Link>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" href="/shopCar">Shoping Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu