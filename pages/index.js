import Head from 'next/head';
import Footer from '../src/components/Footer';
import Menu from '../src/components/Menu';
import Conteudo from '../src/screen/conteudo';

export default function Home() {
  return (
    <div >
      <Head>
        <title>{`{Index.Johnatan}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Conteudo />
      <Footer />

    </div>
  )
}
