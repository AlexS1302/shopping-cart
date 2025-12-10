import styles from "./HomePage.module.css";
import { useNavigate } from "react-router";
import ResponsiveHero from "../../UI/ResponsiveHero/ResponsiveHero";
import furniturePic from "../../../assets/images/top-categories/furniture.jpg";
import fragrancePic from "../../../assets/images/top-categories/fragrance.jpg";
import homeDecorPic from "../../../assets/images/top-categories/home-decor.jpg";
import skincarePic from "../../../assets/images/top-categories/skincare.jpg";
import beautyPic from "../../../assets/images/top-categories/beauty.jpg";
import { MailPlus } from "lucide-react";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className={styles.HomePage}>
      <section className={styles.hero}>
        <ResponsiveHero />
      </section>

      <section className={styles.categoriesContainer}>
        <h2 className={styles.categoriesTitle}>Top Categories</h2>
        <div className={styles.categoriesGrid}>
          <div className={styles.furnitureCategory}>
            <img
              src={furniturePic}
              alt="Cozy living room with fireplace and modern furniture"
            ></img>
            <button type="button" onClick={() => handleClick("furniture")}>
              Furniture
            </button>
          </div>
          <div className={styles.fragranceCategory}>
            <img src={fragrancePic} alt="Chanel No. 5 eau de parfum"></img>
            <button type="button" onClick={() => handleClick("fragrances")}>
              Fragrance
            </button>
          </div>
          <div className={styles.homeDecorCategory}>
            <img src={homeDecorPic} alt="Candle"></img>
            <button
              type="button"
              onClick={() => handleClick("home-decoration")}
            >
              Home Decor
            </button>
          </div>
          <div className={styles.skincareCategory}>
            <img src={skincarePic} alt="Illumination Mask by Lume"></img>
            <button type="button" onClick={() => handleClick("skin-care")}>
              Skincare
            </button>
          </div>
          <div className={styles.beautyCategory}>
            <img src={beautyPic} alt="Lipstick by BECCA"></img>
            <button type="button" onClick={() => handleClick("beauty")}>
              Beauty
            </button>
          </div>
        </div>
      </section>

      <section className={styles.aboutUsContainer}>
        <h2 className={styles.aboutUsTitle}>About Us</h2>
        <div className={styles.aboutUsGrid}>
          <div className={styles.sustainability}>
            <span>Mindful Materials, Meaningful Impact</span>
          </div>
          <div className={styles.stores}>
            <span>40+ Stores Worldwide</span>
          </div>
          <div className={styles.ourStory}>
            <h3>Our Story</h3>
            <p>
              From one store to over 40 worldwide, our journey has always been
              about curating trusted brands and everyday essentials with care.
              We're here to make shopping feel personal, thoughtful, and a
              little more joyful, wherever you are.
            </p>
            <p>
              As we grow, we're also making more mindful choices such as using
              eco-friendly packaging, partnering with responsible brands, and
              finding ways to reduce our impact while still delivering what you
              love.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.newsletterContainer}>
        <div className={styles.newsletterInfo}>
          <h2 className={styles.newsletterTitle}>
            Join our Newsletter for Exclusive Offers!
          </h2>
          <h2 className={styles.newsletterDescription}>
            Be the first to hear about new arrivals, special discounts, and
            insider-only updates
          </h2>
        </div>

        <div className={styles.newsletterInputContainer}>
          <input
            type="text"
            id="newsletterInput"
            name="newsletter"
            className={styles.newsletterInput}
            placeholder="Enter your email"
          ></input>
          <button type="button" className={styles.newsletterButton}>
            <span className={styles.buttonText}>Subscribe</span>
            <MailPlus className={styles.buttonIcon} />
          </button>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
