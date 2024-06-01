import Consume from '../../components/Consume'
// obtiene los datos y los convierte 
async function loadPosts() {
    // realizamos una peticion 

    // ya que es una peticion asincrona debe contener await 

    const response = await fetch('https://fakestoreapi.com/products')

    // una vez que tengamos los datos los convertimos en .json 
    // y los guardamos en una variable 
    const data = await response.json()

    console.log(data);

    return data;
}
// function pLoadPosts() {
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// }

// componente en pantalla
async function PostPages() {

    const posts = await loadPosts()

    console.log("datos por consola", posts)

    return (
        <div>
            <h2>Datos:</h2>
            {posts.map((post) => (
             <Consume post={post} key={post.id}/>   
            ))}
        </div>
    );
}
export default PostPages;