import Image from "next/image";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.image}>
        <Image
          src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-blackboard-chalkboard-concrete_1258-52289.jpg?w=1060&t=st=1675448750~exp=1675449350~hmac=f3591e7305b1031e3827e41cf84dd19565ef2c05bf0b8a61a9b2e9a2067d856d"
          alt="imgHero"
          width={800}
          height={250}
          priority={true}
        />
        <h3>In wine there’s truth.</h3>
      </div>
    </div>
  );
};

export default Hero;
