import styles from "./ResponsiveHero.module.css";

function ResponsiveHero() {
  return (
    <picture>
      <source
        srcSet="../../../src/assets/images/hero/skincare-desktop.jpg"
        media="(min-width: 1200px)"
      />
      <source
        srcSet="../../../src/assets/images/hero/skincare-tablet.jpg"
        media="(min-width: 600px)"
      />
      <img
        src="../../../src/assets/images/hero/skincare-mobile.jpg"
        alt="Caffeinated Skincare duo from UpCircle"
        className={styles.heroImg}
      />
    </picture>
  );
}
export default ResponsiveHero;
