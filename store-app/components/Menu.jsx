import Link from "next/link"
import SubMenu from "./SubMenu"
import "@/app/styles/styleMenu.css"

// fetch de categorias 

async function loadCategory() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    return data;
}


// componente MENU PRINCIPAL
async function Menu() {
    const categorys = await loadCategory();
    return (
        <nav className="menu">
            <Link className="link" href="/">
                <h2 className="menu__title">Logo</h2>
            </Link>
            <ul className="menu__list">
                <li className="menu__item menu__item--main">
                    {/* etiqueta link reemplaza a al etiqueta a  */}
                    <Link className="link" href="/">Home</Link>
                </li>
                <li className="menu__item menu__item--category">
                    Category
                    {
                        <SubMenu categorys={categorys}/>
                    }
                </li>
                <li className="menu__item">
                    <Link className="link" href="/shopCar">Shoping Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu