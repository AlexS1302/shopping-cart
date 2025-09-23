import styles from "./Carousel.module.css";
import useCarousel from "../../../hooks/useCarousel";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { carouselImages } from "../../../data/images";

function Carousel() {
  const { currentItem, next, prev } = useCarousel(carouselImages);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselSlide}>
        <img src={currentItem.src} alt={currentItem.alt} />
      </div>

      <button type="button" onClick={prev} className={styles.prev}>
        <ChevronLeft />
      </button>
      <button type="button" onClick={next} className={styles.next}>
        <ChevronRight />
      </button>
    </div>
  );
}
export default Carousel;
