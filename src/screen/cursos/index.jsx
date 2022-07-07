import styles from './cursos.module.scss';

export default function Cursos() {
    return (
        <div className={styles.container__all}>

            <div className={styles.container}>
                <div className={styles.Certificados}>
                    <h2>Certificados</h2>
                    <div className={styles.Certificado}>

                    </div>

                    <div className={styles.Certificado}>

                    </div>
                    <div className={styles.Certificado}>

                    </div>

                </div>

                <div className={styles.habilidades} >
                    <h2>Habilidades</h2>
                    <div className={styles.habilidade}>

                    </div>

                    <div className={styles.habilidade}>

                    </div>
                    <div className={styles.habilidade}>

                    </div>
                </div>
            </div>


        </div>
    )
}