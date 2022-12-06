import Head from 'next/head';
import Footer from '../src/components/Footer';
import Menu from '../src/components/Menu';
import { GlobalStyles } from '../styles/GlobalStyles';


function MyApp({ Component, pageProps }) {
  return (
    <main >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" /> */}
      </Head>
      <GlobalStyles />
      <Menu />
      <Footer />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp;