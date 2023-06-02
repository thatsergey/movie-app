import React from "react"
import styles from '../styles/Home.module.css'

const Footer =() =>{
   return (
      <footer className={styles.footer}>
         <div>
            <span>Created by </span>
            <a 
            href="https://github.com/thatsergey?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"> Sergey
            </a>
         </div>
      </footer>
   )
}
export default Footer