import Banner from '../../components/Banner';
import { Avancar } from '../../components/voltar';
import styles from './conteudo.module.scss';



export default function Conteudo() {
  return (
    <div className={styles.container}>
      <div className={styles.container_conteudo}>

        <Banner />
        
          <Avancar ir="/sobre"/>
        

      </div>
    </div>
  )
}
