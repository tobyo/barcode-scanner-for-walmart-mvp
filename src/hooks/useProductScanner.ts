import { useState } from 'react';
import { fetchProductDetails } from '../utils/api';

const useProductScanner = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const scanProduct = async (barcode: string) => {
    try {
      const productDetails = await fetchProductDetails(barcode);
      setProduct(productDetails);
      setError(null);
    } catch (err) {
      setError('Failed to fetch product details');
    }
  };

  return { product, error, scanProduct };
};

export default useProductScanner;
