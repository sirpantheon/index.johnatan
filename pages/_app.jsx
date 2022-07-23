import Head from 'next/head';
import Footer from '../src/components/Footer';
import Menu from '../src/components/Menu';
import { GlobalStyles } from '../styles/GlobalStyles';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title >{`{Index.JP}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Menu />
      <Footer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;