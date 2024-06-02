'use client'

import Link from "next/link"
import "@/app/styles/styleMain.css"

function AllProducts({ product }) {
    return (
        <section className="product product__main">
            {/* click ir a ese id y hacer la consulta  */}
            <Link className="product__content link" href={`/${product.id}`}>
                <h3>{product.id} {product.title}</h3>
                <img className="product__img" src={product.image} alt="Image" />
                <p>Precio Del Producto: {product.price}</p>
            </Link>
            <button className="product__btn" onClick={() => { alert("aaaa") }}>Comprar</button>
        </section>
    )
}
export default AllProducts