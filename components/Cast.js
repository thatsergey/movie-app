import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from '../utils/constans'
import { getIdFromKey } from "../utils/common"
import styles from '../styles/Cast.module.css'
import Link from "next/link"
const Cast = ({ id }) => {
   const [cast, setCast] = useState([])
   useEffect(() => {
      const fetchCast = async () => {
         const { data } = await axios.get(`${BASE_URL}/api/cast?id=${getIdFromKey(id)}`)
         setCast([...data.cast.slice(0, 7)])
      }

      fetchCast()
   }, [id])
   console.log(cast.map(cs => cs.image.url));
   
   if (!cast.length) return 'loading...'
   

   return (
      <div className={styles.cast}>
         <h2 className={styles.heading}>Cast</h2>
         <div className={styles.list}>
            {cast.map(({ characters, id, image, name }) => (
               <Link href={`${BASE_URL}/actor/${getIdFromKey(id)}`} key={id}>
                  <div className={styles.item}>
                     <div className={styles.image} style={{ backgroundImage: `url(${image?.url})`}}/>

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

      </div>
   )

}
export default Cast

