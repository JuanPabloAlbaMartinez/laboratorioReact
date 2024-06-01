// cargamos la peticion a la API 
async function loadProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  // recibimos la respuesta del producto 
  // convertimos a json 
  const data = await response.json();
  return data
}

async function page({ params }) {
  // le pasamos la pagina a donde nos direccionamos 
  const productPost = await loadProduct(params.nProduct);
  return (
    <section>
      <h3>{productPost.id} {productPost.title}</h3>
      <p>Categoria: {productPost.category}</p>
      <img src={productPost .image} alt="Image" />
      <p>Precio Del Producto:  {productPost.price}</p>
      <p>Descripcion Del Producto: {productPost.description}</p>
    </section>
  )
}


export default page