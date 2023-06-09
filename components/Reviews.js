import axios from "axios"
import React, { useEffect, useState } from "react"
import { getIdFromKey } from "../utils/common"
import { BASE_URL } from "../utils/constans"
import styles from '../styles/Reviews.module.css'
import Preloader from "./Preloader"

const Reviews = ({ id }) => {

   const [reviews, setReviews] = useState([])
   const [isPending, setIsPending] = useState(false)
   useEffect(() => {
      const fetchReviews = async () => {
         setIsPending(true)
         const { data } = await axios.get(`${BASE_URL}/api/review?id=${getIdFromKey(id)}`)

         setReviews(data.reviews)
         setIsPending(false )
      }

      fetchReviews()
   }, [id])

   return (
      <div className={styles.list}>
         <h2>Reviews</h2>
         {isPending ? <Preloader/>: 
         (
                reviews?.length ? (
                  <div className={styles.container}>
                     <div className={styles.reviews}>
                        {reviews.map(({ author: { displayName, userId }, authorRating, reviewText, reviewTitle, submissionDate }) => (
                           <div className={styles.review} key={userId}>
                              <div className={styles.user}>
                                 <div className={styles.header}>
                                    <div className={styles.author}>
                                       {displayName}
                                    </div>
                                    <div className={styles.date}>
                                       {submissionDate}
                                    </div>
                                 </div>
                                 {authorRating && (
                                    <div className={styles.rating}>
                                       <span>{authorRating}</span> / 10
                                    </div>
                                 )}
                              </div>

                              <div className={styles.content}>
                                 <div className={styles.title}>
                                    {reviewTitle}
                                 </div>
                                 <div className={styles.text}>
                                    <Text text={reviewText} />
                                 </div>
                              </div>

                           </div>
                        ))}
                     </div>

                  </div>
               ) : (
                  <div className={styles.results}>No reviews yet</div>
               )

         )}
              
      </div>
   )
}
const Text = ({ text }) =>{
   const isFull = text.length < 300
   const fullText = !isFull ? `${text.slice(0,300)}...` : text;
   const [isOpen, setIsOpen] = useState(false)
   const handleClick = ()=>setIsOpen(!isOpen)

      return (
      <>
         <div className={styles.text}>
            {fullText}
            {!isFull && (
                  <div className={styles.more} onClick={handleClick}>
                     Read more...
                  </div>
            )}
         </div>
         {isOpen &&(
            <>
               <div className={styles.modal}>
                     <span onClick={handleClick}>X</span>
                     <p>{text}</p>
               </div>
                  <div onClick={handleClick} className={styles.overlay}/>
            </>
         )}
      </>
   )
}
export default Reviews