import React, { useState, useEffect } from 'react';
import './ProductsList.css'
import { Link } from "react-router-dom";
import useProducts from '../hooks/useProducts';
import { Navigation } from '../components/Navigation';
function ProductList() {
    const { products, loading, error } = useProducts();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navigation />
      <h1>Products</h1>

      <ul className='products-container'>
      {products.map((product) => (
        <Link  to={`/Product/${product.id}`}>
            <li key={product.id}>
                <h2>{product.name}</h2>
                <div  className='product' >
                    <img  className="product__image"src={product.colors[0].images[0]} alt={`${product.name} `} />
                </div>
            </li>
        </Link>
      ))} 

      </ul>
    </div>
  );
}

export default ProductList;