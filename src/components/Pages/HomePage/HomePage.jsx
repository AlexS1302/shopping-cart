import styles from "./HomePage.module.css";
import Carousel from "../../UI/Carousel/Carousel";
import furniturePic from "../../../assets/images/top-categories/furniture.jpg";
import fragrancePic from "../../../assets/images/top-categories/fragrance.jpg";
import homeDecorPic from "../../../assets/images/top-categories/home-decor.jpg";
import skincarePic from "../../../assets/images/top-categories/skincare.jpg";
import beautyPic from "../../../assets/images/top-categories/beauty.jpg";

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Carousel />

      <section className={styles.categoriesContainer}>
        <h2 className={styles.categoriesTitle}>Top Categories</h2>
        <div className={styles.categoriesGrid}>
          <div className={styles.furnitureCategory}>
            <img
              src={furniturePic}
              alt="Cozy living room with fireplace and modern furniture"
            ></img>
            <span>Furniture</span>
          </div>
          <div className={styles.fragranceCategory}>
            <img src={fragrancePic} alt="Chanel No. 5 eau de parfum"></img>
            <span>Fragrance</span>
          </div>
          <div className={styles.homeDecorCategory}>
            <img src={homeDecorPic} alt="Candle"></img>
            <span>Home Decor</span>
          </div>
          <div className={styles.skincareCategory}>
            <img src={skincarePic} alt="Illumination Mask by Lume"></img>
            <span>Skincare</span>
          </div>
          <div className={styles.beautyCategory}>
            <img src={beautyPic} alt="Lipstick by BECCA"></img>
            <span>Beauty</span>
          </div>
        </div>
      </section>

      <section className={styles.mostPopularContainer}>
        <h2 className={styles.mostPopularTitle}>Most Popular</h2>
        <div className={styles.mostPopularGrid}></div>
      </section>

      <section className={styles.aboutUsContainer}>
        <h2 className={styles.aboutUsTitle}>About Us</h2>
        <div className={styles.aboutUsGrid}></div>
      </section>

      <section className={styles.newsletterContainer}>
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
      </section>
    </div>
  );
}
export default HomePage;
