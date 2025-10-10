import { useState, useEffect } from "react";
import useFilteredProducts from "../../../hooks/useFilteredProducts";
import { useOutletContext, useSearchParams } from "react-router";
import { Star, Heart } from "lucide-react";
import styles from "./Shop.module.css";
import RefinePanel from "./RefinePanel/RefinePanel";

function Shop() {
  const { setCartItems } = useOutletContext;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [filters, setFilters] = useState({
    category: "",
    sortBy: "",
    order: "asc",
    limit: 30,
    skip: 0,
    search: query || "",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: query || "",
    }));
  }, [query]);

  const { productInfo, loading, error } = useFilteredProducts(filters);

  if (loading) return <p>Loading</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log("Fetched product info:", productInfo);

  return (
    <div className={styles.Shop}>
      <RefinePanel filters={filters} setFilters={setFilters} />
      <section className={styles.productGrid}>
        {productInfo &&
          productInfo.map((product) => (
            <article key={product.id} className={styles.productCard}>
              <Heart className={styles.favouriteIcon} />
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
              <button
                type="button"
                onClick={() => setCartItems((prev) => [...prev, product])}
                className={styles.addToCartBtn}
              >
                Add to Cart
              </button>
            </article>
          ))}
      </section>
    </div>
  );
}
export default Shop;
