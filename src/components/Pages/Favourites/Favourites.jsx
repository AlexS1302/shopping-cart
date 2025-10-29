import styles from "./Favourites.module.css";
import { useOutletContext } from "react-router";
import ProductCards from "../../UI/ProductCards/ProductCards";

function Favourites() {
  const { favouriteItems } = useOutletContext();

  return (
    <div className={styles.Favourites}>
      <section className={styles.productGrid}>
        {favouriteItems.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
export default Favourites;
