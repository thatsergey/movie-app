import Footer from '../components/footer'
import '../styles/globals.css'
import '../styles/main.css'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { BASE_URL } from '../utils/constans'

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
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
