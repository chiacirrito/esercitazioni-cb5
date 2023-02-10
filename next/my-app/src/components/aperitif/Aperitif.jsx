import { foodList } from "@/mocks/foodList";
import styles from "./index.module.scss";
import Image from "next/image";

const FoodList = (food) => {
  console.log(food);
  return (
    <>
      <main className={styles.aperitif}>
        <h3>Try them with : </h3>
      </main>
      <div className={styles.list}>
        <ul className={styles.ul}>
          {foodList.map((food) => (
            <li className={styles.li} key={food.id}>
              <Image
                src={food.images}
                alt={food.alt}
                width={300}
                height={200}
                priority={true}
              />
              <h4>
                {food.cheese} + {food.fruit} + {food.nut}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FoodList;
