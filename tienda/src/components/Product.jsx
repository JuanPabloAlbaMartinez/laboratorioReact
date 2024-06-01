// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router';
// import Skeleton from 'react-loading-skeleton';

// function Product() {

//     const { id } = useParams();
//     const [data, setData] = useState ([])
//     const [filter, setFilter] = useState([]);
//     const [product, setProduct] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         let componentMounted = true;
    
//         const getProductos = async () => {
//           setLoading(true);
//           try {
//             const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//             const result = await response.json();
//             if (componentMounted) {
//             setData (result);
//             setFilter(result);
//             const uniqueCategories = [...new Set(result.map((products) => products.category))];
//             setCategorias(uniqueCategories);  setProduct(result);
//     } 
//   } catch (error) {
//         console.error('Error when fetching products', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getProducts();
//     return () => {
//         componentMounted = false;
//       };
//     }, []);
  
//     useEffect(() => {
//       const getCategorias = async () => {
//         try {
//           const response = await fetch('https://fakestoreapi.com/products/categories');
//           const categoriasData = await response.json();
//           setCategorias(categoriasData);
//         } catch (error) {
//           console.error('Error fetching categories:', error);
//         }
//       };
  
//       getCategorias();
//     }, []);
  
//     const filtrarPorCategoria = (categoria) => {
//       if (categoria === "all") {
//         setFilter(data);
//       } else {
//         setFilter(data.filter(producto => producto.category === categoria));
//       }
//     };
//         return (
//             <>
//                 <div className="row d-flex justify-content-center">
//                     <div className="col-md-12">
//                         <div>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <div className="images p-3">
//                                         <div className="text-center p-4">
//                                             <Skeleton height={300} width={250} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <div className="border p-4">
//                                         <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">                                                <Skeleton height={30} width={150} />
//                                         </span>
//                                             <h5 className="text-uppercase">
//                                                 <Skeleton height={30} width={200} />
//                                             </h5>
//                                             <div className="price d-flex flex-row align-items-center">
//                                                 <span className="act-price">
//                                                     <Skeleton height={20} width={70} />
//                                                     <Skeleton height={30} width={100} />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <p className="about">
//                                             <Skeleton height={10} width={300} />
//                                             <Skeleton height={10} width={300} />
//                                             <Skeleton height={10} width={300} />
//                                             <Skeleton height={10} width={300} />
//                                         </p>
//                                         <div className="cart mt-4 align-items-center">
//                                             <Skeleton height={40} width={150} />

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     const ShowDetails = () => {
//         return (
//             <>
//                 <div className="row d-flex justify-content-center">
//                     <div className="col-md-12">
//                         <div>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <div className="images p-3">
//                                         <div className="text-center p-4">
//                                             <img id="main-image" alt="product" src={product.image} width="250" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <div className="border p-4">
//                                         <div className="mt-4 mb-3">

//                                         <span className="text-muted text-capitalize"> in {product.category}</span>

//                                             <h5 className="text-uppercase">
//                                                 {product.title}
//                                             </h5>

//                                             Rating {product.rating && product.rating.rate}
//                                             <i className="fa fa-star text-warning"></i>

//                                             <div className="price d-flex flex-row align-items-center">
//                                                 <big className="display-6"><b>${product.price}</b></big>
//                                             </div>
//                                         </div>
//                                         <p className="text-muted">{product.description}</p>
//                                         <div className="cart mt-4 align-items-center"> <button className="btn btn-outline-dark text-uppercase mr-2 px-4">Buy</button> </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     return (
//         <>
//             <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>

//                 {loading ? <Loading /> : <ShowDetails />}

//             </div>
//         </>
//     );


// export default Product

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';

function Product() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let componentMounted = true;

        const getProductos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const result = await response.json();
                if (componentMounted) {
                    setData(result);
                    setFilter(result);
                    const uniqueCategories = [...new Set(result.map((products) => products.category))];
                    // setCategorias(uniqueCategories); // Esta línea está comentada, ¿es intencional?
                }
            } catch (error) {
                console.error('Error al obtener los productos', error);
            } finally {
                setLoading(false);
            }
        };

        getProductos();

        return () => {
            componentMounted = false;
        };
    }, [id]);

    useEffect(() => {
        const getCategorias = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const categoriasData = await response.json();
                // setCategorias(categoriasData); // Esta línea también está comentada, ¿es correcto?
            } catch (error) {
                console.error('Error al obtener las categorías:', error);
            }
        };

        getCategorias();
    }, []);

    const filtrarPorCategoria = (categoria) => {
        if (categoria === "all") {
            setFilter(data);
        } else {
            setFilter(data.filter(producto => producto.category === categoria));
        }
    };

    return (
        <>
            <div className="row d-flex justify-content-center">
                {}
            </div>
        </>
    );
}

export default Product;
