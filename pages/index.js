import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Genevieve's Bookstore!" />
        <Link href="/main">
          <button style = {{marginTop: '20px', padding: '10px 20px', fontSize: '16px'}}>
            Explore my bookstore!
          </button>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
