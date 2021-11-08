import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

export const siteTitle = 'My Profile'

export default function Layout({ children, asPath }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js"/>
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <header className={styles.header} />
      <main>{children}</main>
      <Footer />
    </div>
  )
  
}