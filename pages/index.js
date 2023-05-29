import styles from '../styles/index.module.css'
import Image from 'next/image'
import icon from '../images/refresh.png'


export default function Home() {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}/>
      <h1 className={styles.title}>Welcome to Movie</h1>
      <div className={styles.subtitle}>
        The dest movie app to help you for tonight
      </div>
      <div className={`update ${styles.update}`}>
      <Image 
      className='icon'
      src={icon}
      width={14}
      height={14}
      alt=''
      />
      <span>Get a movie</span>
      </div>      
    </div>
  )
}
