'use client'

import "@/app/styles/styleProduct.css"

// cargamos la peticion a la API 
async function loadProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  // recibimos la respuesta del producto 
  // convertimos a json 
  const data = await response.json();
  return data
}
// componente cargado 
async function page({ params }) {
  // le pasamos la pagina a donde nos direccionamos 
  const productPost = await loadProduct(params.nProduct);
  return (
    <section className="product__page">
      <section className="product product--page">
        <img className="product__page--img" src={productPost.image} alt="Image" />
        <section className="product__description">
          <h2 className="menu__title">{productPost.title}</h2>
          <h3>Categoria:</h3>
          <p>{productPost.category}</p>
          <h3>Precio Del Producto:</h3>
          <p>${productPost.price}</p>
          <h3>Descripcion Del Producto:</h3>
          <p>{productPost.description}</p>
          <button className="product__btn product__btn--page" onClick={() => { alert("aaaa") }}>Comprar</button>
        </section>
       
      </section>
    </section>
  )
}
export default page