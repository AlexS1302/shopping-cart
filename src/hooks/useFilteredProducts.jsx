import { useState, useEffect } from "react";

function useFilteredProducts(filters) {
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { search, category, sortBy, order, limit, skip } = filters;

        let endpoint = "https://dummyjson.com/products";
        if (category) {
          endpoint += `/category/${category}`;
        } else if (search) {
          endpoint += `/search`;
        }

        let queryParams = `?limit=${limit}&skip=${skip}`;
        if (search) queryParams += `&q=${search}`;
        if (sortBy) queryParams += `&sortBy=${sortBy}&order=${order}`;

        endpoint += queryParams;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();

        const simplifiedData = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          thumbnail: product.thumbnail,
          category: product.category,
          rating: product.rating,
        }));

        setProductInfo(simplifiedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [filters]);

  return { productInfo, loading, error };
}
export default useFilteredProducts;
