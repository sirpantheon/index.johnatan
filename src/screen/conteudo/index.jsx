import Banner from "../../components/Banner";
import styles from "./conteudo.module.scss";

export default function Conteudo() {
  return (
    <div className={styles.container}>
      <div className={styles.container_conteudo}>
        <Banner />
      </div>
    </div>
  );
}
