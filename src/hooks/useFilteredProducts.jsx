import { useState, useEffect } from "react";

function useFilteredProducts(filters) {
  const [productInfo, setProductInfo] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { q, category, sortBy, order, limit, skip } = filters;

      // reset state before fetch
      if (skip === 0) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      setError(null);

      try {
        let endpoint = "https://dummyjson.com/products";
        if (category) {
          endpoint += `/category/${category}`;
        } else if (q) {
          endpoint += `/search`;
        }

        let queryParams = `?limit=${limit}&skip=${skip}`;
        if (q) queryParams += `&q=${encodeURIComponent(q)}`;
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
          quantity: 0,
        }));

        setProductInfo((prev) => {
          if (skip === 0) {
            return simplifiedData;
          } else {
            return [...prev, ...simplifiedData];
          }
        });

        setTotalCount(data.total);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError(error);
      } finally {
        await new Promise((res) => setTimeout(res, 500)); // simulate delay
        setLoading(false);
        setLoadingMore(false);
      }
    }

    fetchProducts();
  }, [filters]);

  return { productInfo, loading, loadingMore, error, totalCount };
}
export default useFilteredProducts;
