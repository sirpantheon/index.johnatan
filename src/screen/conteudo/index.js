import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import styles from './conteudo.module.scss'
import Menu from '../../components/Menu';

export default function Conteudo() {
  return (
    <div className={styles.container}>
      <div className={styles.container_conteudo}>
        
      <Banner />

      </div>
    </div>
  )
}
