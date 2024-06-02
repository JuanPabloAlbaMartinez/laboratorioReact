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
          <h3>{productPost.id} {productPost.title}</h3>
          <p>Categoria: {productPost.category}</p>
          <p>Precio Del Producto:  {productPost.price}</p>
          <p>Descripcion Del Producto: {productPost.description}</p>
          <button className="product__btn" onClick={() => { alert("aaaa") }}>Comprar</button>
        </section>
       
      </section>
    </section>
  )
}
export default page