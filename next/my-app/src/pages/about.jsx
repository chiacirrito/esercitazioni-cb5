import Hero from "@/components/hero";
import styles from "@/styles/Pages.module.scss";
import WineList from "@/components/wineList/WineList";
import Aperitif from "@/components/aperitif";

const About = () => {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <WineList />
        <Aperitif />
      </main>
    </>
  );
};

export default About;
