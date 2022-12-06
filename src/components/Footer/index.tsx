import styles from './footer.module.scss';
import Image from 'next/image';
import LogoLin from '../../../public/icons8-linkedin-preto.svg';
import LogoGit from '../../../public/icons8-github-preto.svg';
import LogoGmail from '../../../public/icons8-google-logo-preto.svg';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.container}>
            <Link href="https://www.linkedin.com/in/johnatan-sousa-silva-paixao-87ab81123/" id="linkedin">
                <Image src={LogoLin} alt={"linkedin"} />
            </Link>
            <Link href="https://github.com/sirpantheon" id="github">
                <Image src={LogoGit} alt={"github"} />
            </Link>
            <div className={styles.gmail}>
                <Image src={LogoGmail} alt={"gmail"} />
                <span>johnatan.sousa@gmail.com</span>
            </div>
        </footer>
    )
}