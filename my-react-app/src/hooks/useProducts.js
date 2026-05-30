import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/apiService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return { products, loading };
};