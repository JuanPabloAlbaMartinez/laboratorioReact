
import AllProducts from "../components/AllProducts"
import "./globalStyle.css"

// consumir servicio 

async function loadAPI() {
    // relizamos el consumo o peticio a la API 
    // ya que es una peticion asincrona debe contener await en la peticion y async en la funcion 
    const response = await fetch('https://fakestoreapi.com/products');

    // una vez que tengamos los datos los convertimos en .json 
    // y los guardamos en una variable 
    const data = await response.json();
    // nos muestra los datos por consola de vs 
    console.log(data);
    // retorna los datos convertidos en json 
    return data;
}
// function pLoadPosts() {
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// }

// COMPONENTE DE LA PAGINA PRINCIPAL 
async function HomePage() {

    // recibimos la variable data, osea el archivo json y obtenemos(un arreglo basicamente)
    const products = await loadAPI()
    // console.log("datos por consola", products);

    // renderizara el contenido del componente pagina principal
    return (
        // html a renderizar 
        /* al ser un arreglo por venir asi de la api, lo que hacemos es recorrelo con el map  */
        <section>
            <h1>Contenido</h1>
            {
                products.map((product) => (
                    <AllProducts product= {product} key={product.id}/>
                ))
            }
        </section>
    );
}
export default HomePage;