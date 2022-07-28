import styles from "./banner.module.scss";
import Image from "next/image";
import imagenJohn from "../../../public/john3.png";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section 
      className={styles.container}
      initial={{ opacity: 0, x:0 }}
      animate={{ opacity: 1, x: [-50, 0]}}
      transition={{
        duration: 2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
      <div className={styles.apresentacao}>
        <h1>Olá, Meu Nome é johnatan...</h1>
        <h3>Desenvolvedor Front-End</h3>
        <p>HTML | Scss | React | NextJs | TypeScript </p>
      </div>

      <div className={styles.imagen}>
        <Image src={imagenJohn} alt={"john"} />
      </div>
    </motion.section>
  );
}
