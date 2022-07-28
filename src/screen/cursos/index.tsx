import styles from "./cursos.module.scss";
import { motion } from "framer-motion";

export default function Cursos() {
  return (
    <motion.div
      className={styles.container__all}
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [-50, 0] }}
      transition={{
        duration: 2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className={styles.container}>
        <div className={styles.Certificados}>
          <h2>Certificados</h2>
          <div className={styles.Certificado}></div>

          <div className={styles.Certificado}></div>
          <div className={styles.Certificado}></div>
        </div>

        <div className={styles.habilidades}>
          <h2>Habilidades</h2>
          <div className={styles.habilidade}></div>

          <div className={styles.habilidade}></div>
          <div className={styles.habilidade}></div>
        </div>
      </div>
    </motion.div>
  );
}
