import Footer from '../components/Footer'
import '../styles/globals.css'
import '../styles/main.css'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { BASE_URL } from '../utils/constans'
import { useAppStore } from '../store/store'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const { setItems } = useAppStore();
  useEffect(()=>{
    setItems(pageProps.data);
  }, [pageProps.data,setItems])
  return(
    <div className={styles.container}>
      <Component {...pageProps} />
      <Footer />
    </div>
  ) 
}
MyApp.getInitialProps = async({Component})=>{
  const pageProps = Component.getInitialProps
  const { data } = await axios.get(`${BASE_URL}/api/movie`)
  return { pageProps: { ...pageProps, data }}
}
export default MyApp
