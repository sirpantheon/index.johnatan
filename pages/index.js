import Head from 'next/head';
import Menu from '../src/components/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`{Index.Johnatan}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

    </div>
  )
}
