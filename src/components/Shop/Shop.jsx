import { useEffect, useState } from "react";
import styles from "./Shop.module.css";

function Shop() {
  const [productInfo, setProductInfo] = useState({
    id: null,
    title: "",
    description: "",
    price: null,
    thumbnail: "",
    category: "",
    rating: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");

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
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log("Fetched product info:", productInfo);

  return (
    <div className={styles.Shop}>
      <aside className={styles.sidebar}></aside>
      <section className={styles.productGrid}>
        {productInfo &&
          productInfo.map((product) => (
            <article key={product.id} className={styles.productCard}></article>
          ))}
      </section>
    </div>
  );
}
export default Shop;
