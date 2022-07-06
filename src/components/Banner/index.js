import styles from './banner.module.scss';
import Image from 'next/image';
import imagenJohn from '../../../public/john3.png';

export default function Banner() {

  return (
    <section className={styles.container}>

      <div className={styles.apresentacao}>
        <h1>Olá, Meu Nome é johnatan...</h1>
        <h3>Desenvolvedor Front-End</h3>
        <p>HTML | Scss | React | NextJs | TypeScript </p>
      </div>

      <div className={styles.imagen}>
        <Image src={imagenJohn} alt={"john"} />
      </div>
    </section>
  )
}
