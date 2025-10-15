import { useSearchParams, useNavigate } from "react-router";
import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ limit, skip }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("skip", skip + limit);
    navigate(`/shop?${params.toString()}`);
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
