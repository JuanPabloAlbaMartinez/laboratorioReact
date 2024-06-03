import AllProducts from "@/components/AllProducts"

async function loadFilter(category) {

    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    

    const data = await response.json(); 
    
    return data
}
export default async function page({params}) {

    const categoryProducts= await loadFilter(params.filter);
    console.log("llega",categoryProducts)
    // categoria a la que me dirijo

    // decodeURIComponent: es un metodo que decodifica una url y la converite a texto normal (Javascript)
    let titleCategory = decodeURIComponent("Categoria: "+params.filter)
    return (
        <div>
            <h2 className="title">{titleCategory}</h2>
            <section className="main">
                {
                    categoryProducts.map((product) => (
                        <AllProducts product={product} key={product.category}/>
                    ))
                }
            </section>
        </div>
    )
}
