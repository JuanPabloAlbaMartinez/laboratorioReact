'use client'
import shoppingCart from "@/app/shopCar/shopingCart"
import "@/app/styles/styleShopingCar.css"

console.log(shoppingCart);

// import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ShoppingCart() {
    useEffect(() => {
        console.log(shoppingCart)
    })
    let totalPrice = 0;
    return (
        <section>
            <h2 className="title">Carrito de Compras</h2>
            <section className="shopCar">
                <section className="shopCar__content product">
                    {shoppingCart.map((item, key) => (
                        <section className="shopCar__product">
                            <h3>{key + 1}</h3>
                            <img className="shopCar__img" src={item.image} alt="Image" />
                            <section className="shopCar__description">
                                <h3>{item.title}</h3>
                                <p><strong>Precio Del Producto: </strong>{"$" + item.price}</p>
                                <p>ID Producto: {item.id}</p>
                            </section>
                            <p><small>Subtotal: {totalPrice += item.price}</small></p>
                            <button className="shopCar__btn" onClick={() => alert('funcionalidad proximamente disponible (no me alcanzo el tiempo xd)')}>Eliminar</button>
                        </section>
                    ))}
                </section>
                <section className="shopCar__buy ">
                <h3 className="buy__title">Total: ${totalPrice}</h3>
                <button className="product__btn" onClick={() => alert('Haz realizado tu compra imaginaria, muchas gracias (funcionalidad proximamente disponible)')}>Realizar Compra</button>
                </section>
            </section>
        </section>
    )
}