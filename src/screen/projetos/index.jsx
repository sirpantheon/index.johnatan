import styles from './projetos.module.scss';
import { motion } from "framer-motion";

export default function Projetos() {
    return (
        <motion.div 
        className={styles.container}
        initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [-50, 0] }}
      transition={{
        duration: 2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
        >

            <div className={styles.trabalhos}>

                <div className={styles.trabalho}>

                </div>

                <div className={styles.trabalho}>

                </div>
                <div className={styles.trabalho}>

                </div>
                <div className={styles.trabalho}>

                </div>
                <div className={styles.trabalho}>

                </div>
                <div className={styles.trabalho}>

                </div>
                <div className={styles.trabalho}>

                </div>
                <div className={styles.trabalho}>

                </div>
                <div className={styles.trabalho}>

                </div>

            </div>
            
        </motion.div>
    )
}