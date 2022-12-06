import styles from './menu.module.scss';
import Image from 'next/image'
import imagenJohn from '../../../public/john6.png'
import Link from 'next/link';

export default function Menu(){
    return (
        <div className={styles.container}>
            <div className={styles.menu}>

                <div className={styles.avatar}>
                    <Image src={imagenJohn} alt={"imagenJohn"} />
                </div>

                <div className={styles.botoes}>
                    <Link href="/" id="home">
                        <button>Home</button>
                    </Link>
                    <Link href="/sobre" id="sobre">
                        <button>Sobre</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}