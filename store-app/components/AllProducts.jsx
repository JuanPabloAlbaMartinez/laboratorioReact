'use client'

import Link from "next/link"

function AllProducts({ product }) {
    return (
        <section>
            <section>
                {/* click ir a ese id y hacer la consulta  */}
                <Link href={`/${product.id}`}>
                    <h3>{product.id} {product.title}</h3>
                    <img src={product.image} alt="Image" />
                </Link>
                <p>Precio Del Producto: {product.price}</p>
            </section>
            <button onClick={() => { alert("aaaa") }}>Comprar</button>
        </section>
    )
}
export default AllProducts