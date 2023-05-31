import axios from "axios"
import { BASE_URL } from "../utils/constans"

export default function Movie({movie}) {
   console.log(movie);
   return <>assd</>
}
export async function getServerSideProps({query}){
   const { data } = await axios.get(`${BASE_URL}/api/movie2?id=${query.id}`)
   return {
       props: { 
         movie: data,
      }
       }
}