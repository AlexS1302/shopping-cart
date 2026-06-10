import styles from "./ResponsiveHero.module.css";
import desktop from "../../../assets/images/hero/skincare-desktop.jpg";
import tablet from "../../../assets/images/hero/skincare-tablet.jpg";
import mobile from "../../../assets/images/hero/skincare-mobile.jpg";

function ResponsiveHero() {
  return (
    <picture>
      <source srcSet={desktop} media="(min-width: 1200px)" />
      <source srcSet={tablet} media="(min-width: 600px)" />
      <img
        src={mobile}
        alt="Caffeinated Skincare duo from UpCircle"
        className={styles.heroImg}
      />
    </picture>
  );
}
export default ResponsiveHero;
