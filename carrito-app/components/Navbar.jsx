import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <h1>Tienda</h1>
            <ul>
                <li>
                    {/* etiqueta link reemplaza a al etiqueta a  */}
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/galery">Galery</Link>
                </li>
                <li>
                    <Link href="/store">Store</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}