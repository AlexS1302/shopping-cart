import { useState } from "react";

function useCarousel(items) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const currentItem = items[index];

  return { currentItem, index, next, prev };
}
export default useCarousel;
