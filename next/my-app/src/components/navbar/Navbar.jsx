import Link from "next/link";
import styles from "./index.module.scss";
import { TbHome } from "react-icons/tb";
import { GrContact } from "react-icons/gr";
import { MdWineBar } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.list}>
        <ul>
          <li>
            <Link href="/">
              <TbHome className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <MdWineBar className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link href="/users">
              <GrContact className={styles.icon} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
