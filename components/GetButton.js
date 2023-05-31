import React from "react";
import Image from "next/image";
import update from '../images/refresh.png'
import { useAppStore } from "../store/store";
import { useRouter } from "next/router";
import { BASE_URL } from "../utils/constans";
import { getIdFromKey } from '../utils/common'
// import styles from 
const GetButton = ({ text ='Get a movie', cn=''})=> {
   const router = useRouter();
   const { items } = useAppStore();
   const getMovie = () => {
      if(!items?.length) return
      router.push(`${BASE_URL}/${getIdFromKey(items[0])}`)
   }
   return (
      <div className={`update ${cn}`} onClick={getMovie}>
         <Image
            className='icon'
            src={update}
            width={14}
            height={14}
            alt=''
         />
         <span>{text}</span>
      </div>      
   )
}
export default GetButton