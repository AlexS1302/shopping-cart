import styles from "./Favourites.module.css";
import { useOutletContext } from "react-router";
import { useState } from "react";
import ProductCards from "../../UI/ProductCards/ProductCards";
import { Heart } from "lucide-react";
import ShopLink from "../../UI/ShopLink/ShopLink";

function Favourites() {
  const { favouriteItems } = useOutletContext();
  const [isActive, setIsActive] = useState(false);

  const toggleHeart = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={styles.Favourites}>
      <h2>Your Favourites</h2>
      {favouriteItems.length > 0 ? (
        <section className={styles.productGrid}>
          {favouriteItems.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <section className={styles.emptyFavourites}>
          <h3>Your favourites list is empty.</h3>
          <p>
            Tap the{" "}
            <Heart
              onClick={toggleHeart}
              className={`${styles.inlineHeart} ${
                isActive ? styles.active : ""
              }`}
            />
            to save the items you love!
          </p>
          <ShopLink />
        </section>
      )}
    </div>
  );
}
export default Favourites;
