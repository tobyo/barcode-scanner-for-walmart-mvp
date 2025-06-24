export const fetchProductDetails = async (barcode: string) => {
  try {
    // Simulate API call
    const response = await fetch(`https://api.example.com/products/${barcode}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
