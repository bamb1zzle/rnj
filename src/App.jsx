import styles from "./style";
import { Footer, Navbar, Testimonials, Hero } from "./components";
import ReadingList from "./components/ReadingList";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <ReadingList />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>

);


export default App;
