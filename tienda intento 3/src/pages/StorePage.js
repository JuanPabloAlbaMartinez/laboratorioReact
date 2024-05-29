import React, { useState, useEffect } from 'react';

const StorePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Renderiza los productos en la página
  return (
    <div>
      {/* Mostrar los productos aquí */}
    </div>
  );
};

export default StorePage;