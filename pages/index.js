import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rushil Patel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav title="Rushil Patel" navItems={['contact', 'portfolio']}/>
        <div className='content'>
          <span>Hello</span>
        </div>
      </main>

      <Footer />
    </div>
  )
}
