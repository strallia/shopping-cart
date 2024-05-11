import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-image.jpg";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main aria-label="home page" className={styles.homePageLayout}>
      <Link to="/shop">
        <button className={styles.shopNowButton}>Shop now</button>
      </Link>
      <img className={styles.heroImage} src={HeroImage} alt="gold earrings" />
    </main>
  );
};

export default HomePage;
