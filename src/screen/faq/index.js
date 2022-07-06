import styles from './faq.module.scss';
import imagenJohn from '../../../public/john3.png';
import Image from 'next/image';

export default function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.imagen}>
                <Image src={imagenJohn} alt={"john"} />
            </div>

            <div className={styles.texto}>
                <p>Meu nome e <strong>Johnatan Sousa Silva Paixao</strong>, tenho 27 anos e sou um estudante de
                    Web desde meus 14 anos
                    por meio de um curso no Senai, sempre tive muito contato com HTML e CSS desde então...
                    foi o que me levou a ingressar na faculdade de tecnologias em jogos digitais, la tive um contato
                    muito bom com linguagens de programação como C++, Javascript e um pouco de Python. hoje em dia
                    procuro me aprofundar nos estudos de TypeScript, React e NextJs, procuro também uma oportunidade
                    de ingressar no mercado de trabalho nessa área que tanto me dedico.
                </p>
                <p>
                    <strong>Irei me formar nesse ano de 2022 em tecnologia em jogos digitais</strong>,
                    quando estava procurando algo para me graduar fiquei muito indeciso entre jogos digitais e
                    desenvolvimento de sistemas, já me ocorreu de querer mudar, mas hoje em dia vejo que nas duas
                    formações eu iria aprender a programar, que era meu objetivo principal então não me arrependo da
                    decisão que tomei... em jogos digitais eu sempre fui um dos três melhores da classe, sempre me dediquei
                    pra me destacar em meio tantas pessoas incríveis e o reconhecimento dado a min pelo os professores me deixava muito feliz.
                </p>
            </div>
        </div>
    )
}