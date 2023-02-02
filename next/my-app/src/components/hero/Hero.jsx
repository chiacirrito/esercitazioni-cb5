import Image from "next/image";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.img}>
        <Image
          src="https://img.freepik.com/free-photo/top-view-charming-black-grapes-overturned-wine-glass-wine-bottle-wine-opener-walnut-dark-table_140725-145864.jpg?w=996&t=st=1675350651~exp=1675351251~hmac=1bf6374f4113b4ddccc79a24cf6337d8df5bd065ad57b0833d86d76881930069"
          alt="img1"
          width={800}
          height={300}
          priority={true}
        />
        <h3>In wine there’s truth.</h3>
      </div>
    </div>
  );
};

export default Hero;
