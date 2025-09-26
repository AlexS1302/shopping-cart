import { Link } from "react-router";
import { Undo2 } from "lucide-react";
import errorImage from "../../../assets/images/error/404-cat.jpg";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.ErrorPage}>
      <div className={styles.messageContainer}>
        <h1>We couldn't find the page you were looking for…but we found a sleeping cat instead!</h1>
        <Link to="/" className={styles.homeButton}>
          <Undo2 />
          Go back
        </Link>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={errorImage}
          alt="Error 404 image"
          className={styles.errorImage}
        ></img>
      </div>
    </div>
  );
}

export default ErrorPage;
