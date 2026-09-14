import { useState, useEffect } from "react";
import { getProduct } from "../services/productService";
const clothCategory = ["men's clothing", "women's clothing"];

export function useProduct() {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await getProduct();
        const clothes = data.filter(
          (product) =>
            clothCategory.includes(product.category)
        );
        setProductData(clothes);
      } catch (error) {
        console.error(error);
        setError("Fail to connect data")
      }
    };

    fetchProduct();
  }, []);

  return{
    loading,productData,error
  }
}
