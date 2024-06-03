'use client'

import Link from "next/link"
import "@/app/styles/styleMain.css"

function addShopCar() {
    alert("Hola mundo");
}

function AllProducts({ product }) {
    return (
        <section className="product product__main">
            {/* click ir a ese id y hacer la consulta  */}
            <Link className="product__content link" href={`/${product.id}`}>
                <h3>{product.id} {product.title}</h3>
                <img className="product__img" src={product.image} alt="Image"/>
                <p><strong>Precio Del Producto: </strong>{"$"+product.price}</p>
            </Link>
            <button className="product__btn" onClick={addShopCar} >Comprar</button>
        </section>
    )
}
export default AllProducts