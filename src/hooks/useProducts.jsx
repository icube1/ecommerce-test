import { useState, useEffect } from 'react';
import { getProducts } from '../services/api'; // Import the API functions

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the products data when the component mounts
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(()=> setLoading(false))
  }, []);

  return { products, loading, error };
}