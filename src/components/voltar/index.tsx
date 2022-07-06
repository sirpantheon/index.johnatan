import Image from 'next/image';
import styles from './voltar.module.scss';
import Avance from '../../../public/avanca.png';
import Back from '../../../public/voltar.png';
import Link from '../Link';
import INavegacao from '../../interfaces/INavegacao';

export function Avancar(props:INavegacao) {
    return (
        <div className={styles.avance}>
            <Link href={props} to={props}>
                <Image src={Avance} alt={"avance"} />
            </Link>
        </div>
    )
}

export function Voltar(props:INavegacao) {
    return (
        <div className={styles.voltar}>
        <Link href={props} to={props}>
            <Image src={Back} alt={"voltar"} />
        </Link>
        </div>
    )
}


