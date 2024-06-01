import Link from "next/link"

// componente MENU PRINCIPAL

function Menu() {
    return (
        <nav>
            <h2>Logo</h2>
            <ul>
                <li>
                    {/* etiqueta link reemplaza a al etiqueta a  */}
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/category">Category</Link>
                </li>
                <li>
                    <Link href="/shopCar">Shoping Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu