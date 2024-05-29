import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(data => setCarts(data))
      .catch(error => console.error('Error fetching carts:', error));
  }, []);

  // Renderiza los productos del carrito aquí
  return (
    <div>
      {/* Mostrar los productos del carrito */}
    </div>
  );
};

export default CartPage;
