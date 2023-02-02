import { Inter } from "@next/font/google";
import Hero from "@/components/hero";
import styles from "@/styles/Home.module.css";
import Gallery from "@/components/gallery";
import Confetti from "react-confetti";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Confetti
        width={1000}
        height={50}
        numberOfPieces={100}
        colors={["black", "violet"]}
        opacity={0.5}
      />
      <Gallery />
    </>
  );
}
