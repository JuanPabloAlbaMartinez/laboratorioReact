import React, { useState, useEffect } from 'react';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Renderiza las categorías y el menú desplegable aquí
  return (
    <div>
      {/* Mostrar las categorías y el menú desplegable */}
    </div>
  );
};

export default CategoriesPage;