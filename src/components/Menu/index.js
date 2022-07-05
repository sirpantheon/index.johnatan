import Link from "../Link";
import styles from './menu.module.scss';
import Image from 'next/image'
import imagenJohn from '../../../public/john4.png'

export default function Menu() {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>

                <div className={styles.avatar}>
                    <Image src={imagenJohn} alt={imagenJohn} />
                </div>

                <div className={styles.botoes}>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/sobre">
                        Sobre
                    </Link>
                    <Link href="/projetos">
                        Projetos
                    </Link>

                </div>
            </div>
        </div>
    )
}