'use client'
import Link from "next/link"
import BtnShop from "./BtnShop"
import "@/app/styles/styleMain.css"

function AllProducts({ product }) {
    return (
        <section className="product product__main">
            {/* click ir a ese id y hacer la consulta  */}
            <Link className="product__content link" href={`/${product.id}`}>
                <h3>{product.id} {product.title}</h3>
                <img className="product__img" src={product.image} alt="Image"/>
                <p><strong>Precio Del Producto: </strong>{"$"+product.price}</p>
            </Link>
            {/* pasamos como propiedad los valores */}
            <BtnShop product={product} />
            {/* <button className="product__btn" onClick={addShopCar} >Comprar</button> */}
        </section>
    )
}
export default AllProducts