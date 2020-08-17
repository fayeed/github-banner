import Head from "next/head";
import styles from "../styles/Home.module.css";
import { generateSvgFiles } from "../utils/generate_svg_files";

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        src="http://localhost:3000/api/social?headline=Hi,%20I%20am%20Fayeed%20Pawaskar%20-%20%3Cbr%20/%3E%20Code%20Tinkerer%20%26%20Software%20Engineer"
        height="280"
        width="840"
      />
    </div>
  );
}

export const getStaticProps = async () => {
  generateSvgFiles();

  return { props: {} };
};
