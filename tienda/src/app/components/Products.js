"use client";
import React,{useState,useEffect} from "react";
import '../page.module.css';

const Products = () => {
    cosnt [loading, setLoading] = useState(false);
    cosnt [data, setData] = useState([]);

        useEffect(() => {
            setLoading(true);
            function fetchProducts() {
                fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>console.log(json))
                .catch(error => {
                console.error('Error fetching products:', error);
                });
              }
        },[]);

    return (
        <div className="products-container">
            {loading && ( 
                <div>
                    {" "}
                    <h1>Loading...</h1>
                </div>
            )}

        {data.map((product)=> (
            <div key={product.id} className="card">
                <div> <img src={product.image} alt="#"/></div>
                <div className="card-description">
                    <h6>{product.title}</h6>
                    <h6>{`Price: ${product.price}`}</h6>
                    <h6>{`Categoty: ${product.category}`}</h6>
                </div>
            </div>
        ))}
        </div>
    );
};

export default Products;