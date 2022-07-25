import Footer from "./containers/Footer";
import HeroSection from "./containers/HeroSection";
import InfoSection from "./containers/InfoSection";
import MiddleSection from "./containers/MiddleSection";
import styles from "./styles/App.module.css";
import infoData from "./utils/infoData";

function App() {
  return (
    <div className={styles.App}>
      <HeroSection />
      <main className={styles.main}>
        <h2 className={styles.mainHeading}>Designed for the future</h2>
        <InfoSection {...infoData.firstInfoSection} />
        <MiddleSection />
        <InfoSection {...infoData.secondInfoSection} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
