import Confetti from "react-confetti";
import styles from "@/styles/Pages.module.scss";

const About = () => {
  return (
    <>
      <main className={styles.main}>
        <p>Work in progress!</p>
        <div className={styles.confetti}>
          <Confetti
            width={1000}
            height={500}
            numberOfPieces={100}
            colors={["white", "gray"]}
            opacity={0.8}
          />
        </div>
      </main>
    </>
  );
};

export default About;
