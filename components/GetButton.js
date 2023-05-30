import React from "react";
import Image from "next/image";
import icon from '../images/refresh.png'
// import styles from 
const GetButton = ({ text ='Get a movie', cn=''})=>{
   return (
      <div className={`update ${cn}`}>
         <Image
            className='icon'
            src={icon}
            width={14}
            height={14}
            alt=''
         />
         <span>{text}</span>
      </div>      
   )
}
export default GetButton