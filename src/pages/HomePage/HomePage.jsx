import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-image.jpg";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const handleShopNowClick = () => {
    // change url to shop page
  };

  return (
    <main aria-label="home page" className={styles.homePageLayout}>
      <Link to="/shop">
        <button className={styles.shopNowButton} onClick={handleShopNowClick}>
          Shop now
        </button>
      </Link>
      <img className={styles.heroImage} src={HeroImage} />
    </main>
  );
};

export default HomePage;
