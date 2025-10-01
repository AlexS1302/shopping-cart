import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { Star } from "lucide-react";

function Shop() {
  const [productInfo, setProductInfo] = useState([]);
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
            <article key={product.id} className={styles.productCard}>
              <img
                src={product.thumbnail}
                alt={`Picture of ${product.title}`}
                className={styles.productThumbnail}
              ></img>
              <div className={styles.productText}>
                <div className={styles.productCategory}>{product.category}</div>
                <div className={styles.productTitle}>{product.title}</div>
                <div className={styles.productDesc}>{product.description}</div>
              </div>
              <div className={styles.productMetrics}>
                <div className={styles.productPrice}>£{product.price}</div>
                <div className={styles.productRating}>
                  <Star fill="#fdd85d" strokeWidth={0} />
                  {product.rating}
                </div>
              </div>
              <button type="button" className={styles.addToCartBtn}>
                Add to Cart
              </button>
            </article>
          ))}
      </section>
    </div>
  );
}
export default Shop;
