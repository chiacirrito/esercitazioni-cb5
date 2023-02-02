import Image from "next/image";
import styles from "./index.module.scss";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <p>A man who drinks only water has a secret to hide.</p>
      <p>Charles Baudelaire</p>
      <div className={styles.images}>
        <Image
          src="https://img.freepik.com/premium-photo/glass-alaska-cocktail-dark-background_165536-15165.jpg?w=360"
          alt="img1"
          width={300}
          height={300}
          priority={true}
        />
        <Image
          src="https://img.freepik.com/free-photo/bottom-half-view-wine-bottle-overturned-wine-glass-black-grapes_140725-145999.jpg?w=360&t=st=1675350001~exp=1675350601~hmac=21dbbb4213357ca98c2ddff3469c71036b3176470cbfc6d4e01d81d48deda59d"
          alt="img2"
          width={300}
          height={300}
          priority={true}
        />
        <Image
          src="https://img.freepik.com/free-photo/front-view-wine-glasses-fresh-grapes-walnuts-yellow-cheese-wood-board-overturned-bottle-dark-background_140725-144998.jpg?w=996&t=st=1675349953~exp=1675350553~hmac=fd38d6a60588593f41b502387243482fcfcec3ba9c087b6283e67efeba55aad4"
          alt="img2"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <p>Wine is the only artwork you can drink.</p>
      <p>Luis Fernando Olaverri</p>
      <div className={styles.imgs}>
        <Image
          src="https://img.freepik.com/free-photo/front-view-bottle-wine-with-glass-wine-black-background_140725-94852.jpg?w=360&t=st=1675351991~exp=1675352591~hmac=e086be41f01c73906808ed04af6fef3d8226d442abe21f73c9ed7124180ad89d"
          alt="img2"
          width={300}
          height={300}
          priority={true}
        />
        <Image
          src="https://img.freepik.com/free-photo/front-view-black-wine-bottle-red-wine-glass-cheese-cut-lemon-pieces-dark-chocolate-wooden-boards-dried-flower-branch-red-table-copy-place_140725-146350.jpg?w=996&t=st=1675352017~exp=1675352617~hmac=22fb8e1c423e776399a716ecb97be6c130d6c9792565aa4f034febeab96e70b8"
          alt="img2"
          width={300}
          height={300}
          priority={true}
        />
        <Image
          src="https://img.freepik.com/free-photo/front-view-wine-glass-grapes-cheese-pieces-meat-slices-wood-plate-newpaper-dark-background_140725-108625.jpg?w=360&t=st=1675352006~exp=1675352606~hmac=bb58dca2ec76c135eafb5720d54e0dbc0c2fe2ca1e850a7e07e7fcb802b80d74"
          alt="img2"
          width={300}
          height={300}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Gallery;
