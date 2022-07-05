import styles from './banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.container}>

      <div className={styles.apresentacao}>
        <h1>Olá, Meu Nome é johnatan...</h1>
        <h2>Desenvolvedor Front-End</h2>
        <p>HTML | Scss | React | NextJs | TypeScript </p>
      </div>

      <div className={styles.imagen}>

      </div>

    </div>
  )
}
