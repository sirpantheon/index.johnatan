import Link from "../Link";
import styles from './menu.module.scss';

export default function Menu() {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>

                <div className={styles.avatar}>
                    <h1>JP</h1>
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