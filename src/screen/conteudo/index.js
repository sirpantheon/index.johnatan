import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import styles from './conteudo.module.scss'

export default function Conteudo() {
  return (
    <div className={styles.container}>
      <Banner />
      <Footer />
    </div>
  )
}
