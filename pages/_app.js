import Footer from '../components/Footer'
import '../styles/globals.css'
import '../styles/main.css'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { BASE_URL } from '../utils/constans'
import { useAppStore } from '../store/store'
import { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const { setItems, items = [] } = useAppStore();

  useEffect(()=>{
    if(!items.length) setItems(pageProps.data)
    setItems(pageProps.data);
  }, [pageProps.data, setItems, items])

  return(
    <div className={styles.container}>
      <Head>
        <title>The best movie </title>
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
        <Footer />

      </main>
    </div>
  ) 
}
MyApp.getInitialProps = async({Component})=>{
  const pageProps = Component.getInitialProps
  const { data } = await axios.get(`${BASE_URL}/api/movie`)
  return { pageProps: { ...pageProps, data }}
}
export default MyApp
