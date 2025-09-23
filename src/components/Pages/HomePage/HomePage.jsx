import styles from "./HomePage.module.css";
import Carousel from "../../UI/Carousel/Carousel";

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Carousel />

      <div className={styles.categoriesContainer}>
        <h2 className={styles.categoriesTitle}>Top Categories</h2>
        <div className={styles.categoriesGrid}></div>
      </div>

      <div className={styles.mostPopularContainer}>
        <h2 className={styles.mostPopularTitle}>Most Popular</h2>
        <div className={styles.mostPopularGrid}></div>
      </div>

      <div className={styles.aboutUsContainer}>
        <h2 className={styles.aboutUsTitle}>About Us</h2>
        <div className={styles.aboutUsGrid}></div>
      </div>

      <div className={styles.newsletterContainer}>
        <h2 className={styles.newsletterTitle}></h2>
        <h2 className={styles.newsletterDescription}></h2>
        <input
          type="text"
          id="newsletterInput"
          name="newsletter"
          className={styles.newsletterInput}
        ></input>
        <button type="button" className={styles.newsletterButton}>
          Subscribe
        </button>
      </div>
    </div>
  );
}
export default HomePage;
