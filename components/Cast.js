import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from '../utils/constans'
import { getIdFromKey } from "../utils/common"
import styles from '../styles/Cast.module.css'
import Link from "next/link"
import Preloader from "./Preloader"
const Cast = ({ id }) => {
   const [cast, setCast] = useState([])
   const [isPending, setIsPending] = useState(false)
   useEffect(() => {
      const fetchCast = async () => {
         setIsPending(true)
         const { data } = await axios.get(`${BASE_URL}/api/cast?id=${getIdFromKey(id)}`)
         setCast([...data.cast.slice(0, 7)])
         setIsPending(false)
      }

      
      fetchCast()
   }, [id])

   return (
      <div className={styles.cast}>
         <h2 className={styles.heading}>Cast</h2>
         {isPending ? <Preloader/>:
         (
               <div className={styles.list}>
                  {cast.map(({ characters, id, image, name }) => (
                     <Link href={`${BASE_URL}/actor/${getIdFromKey(id)}`} key={id}>
                        <div className={styles.item}>
                           <div className={styles.image} style={{ backgroundImage: `url(${image?.url})` }} />

                           <div className={styles.info}>
                              <div className={styles.name}>{name}</div>
                              {characters?.length && (
                                 <div className={styles.character}>{characters[0]}</div>
                              )}

                           </div>
                        </div>
                     </Link>
                  ))
                  }
               </div >

         )}
       

      </div>
   )

}
export default Cast

