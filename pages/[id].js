import axios from "axios"
import MovieItem from "../components/MovieItem";
import { BASE_URL } from "../utils/constans"
import Head from "next/head";
import GetButton from '../components/GetButton'

export default function Movie({ movie }) {
   return <>
      <Head>
         <title>Movie</title>
      </Head>

      <GetButton />
      

      <MovieItem {...movie.data} /> 
   </>
     
}

export async function getServerSideProps({query}){
   const { data } = await axios.get(`${BASE_URL}/api/movie2?id=${query.id}`)
   return {
       props: { 
         movie: data,
      }
       }
}
