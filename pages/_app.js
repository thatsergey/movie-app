import Footer from '../components/footer'
import '../styles/globals.css'
import '../styles/main.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.container}>
      <Component {...pageProps} />
      <Footer />
    </div>
  ) 
}

export default MyApp
