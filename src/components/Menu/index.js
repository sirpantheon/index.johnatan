import Link from "../Link";
import styles from './menu.module.scss';
import Image from 'next/image'
import imagenJohn from '../../../public/john6.png'
import MudarTema from '../MudarTema';

export default function Menu() {
    return (
        <navbar className={styles.container}>
            <div className={styles.menu}>

                <div className={styles.avatar}>
                    <Image src={imagenJohn} alt={imagenJohn} />
                </div>

                <div className={styles.botoes}>
                    <Link href="/">
                        <button>Home</button>
                    </Link>
                    <Link href="/sobre">
                        <button>Sobre</button>
                    </Link>
                    <Link href="/projetos">
                        <button>Projetos</button>
                    </Link>
                    <Link href="/cursos">
                        <button>Habilidades/Cursos</button>
                    </Link>

                </div>
                    <MudarTema />
            </div>
        </navbar>
    )
}