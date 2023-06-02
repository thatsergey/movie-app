import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/constans"
import { getIdFromKey } from "../utils/common"
import styles from '../styles/Film.module.css'
import Link from "next/link"
import Preloader from "./Preloader"

const ActorFilms = ({ id })=> {
   const [films, setFilms] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   useEffect(()=>{
      const fetchFilms = async()=>{
         setIsLoading(true)
         const {  data  } = await axios.get(`${BASE_URL}/api/filmography?id=${getIdFromKey(id)}`)

         console.log(data);
         const filtered = data.data.filmography.filter(({status, titleType})=>{
            return status==='released' && titleType==='movie'
         })
      setFilms(filtered.filter((_,i)=> i<20))
      setIsLoading(false)
      }
      fetchFilms()
   },[id])
   return(
      <div className={styles.films}>
         <h2>Filmography</h2>
         <div className={styles.list}>
            {isLoading ? <Preloader/> : (
               films.map(({ characters, id, image, title, year }) => (
                  <a href={`${BASE_URL}/${getIdFromKey(id)}`} key={id} className={styles.item}>
                           {image && (
                        <div className={styles.image} style={{ backgroundImage: `url(${image.url})` }} />
                           )}
                        <div className={styles.info}>
                           <div className={styles.info}>
                              {title}
                           </div>
                           {characters?.length && (
                              <div className={styles.character}>
                                 <span>as </span>{characters[0]}
                              </div>
                           )}
                        <div className={styles.year}>
                           {year}
                        </div>
                        </div>
                        
                     </a>
               ))
            )}
         </div>
      </div>
   )
}
export default ActorFilms