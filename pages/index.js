import styles from '../styles/index.module.css'
import GetButton from '../components/GetButton'
export default function Home() {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}/>
      <h1 className={styles.title}>Welcome to Movie</h1>
      <div className={styles.subtitle}>
        The dest movie app to help you for tonight
      </div>
      <GetButton cn={styles.update} />
    </div>
  )
}
