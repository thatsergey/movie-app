import axios from "axios"
import { BASE_URL } from "../../utils/constans"
import Head from "next/head";
import ActorItem from "../../components/ActorItem";

export default function Actor({ actor }) {
   console.log('actor', actor.data);
   return <>
      <Head>
         <title>{actor.data.name}</title>
      </Head>
      <ActorItem {...actor.data}/>
   </>
}

export async function getServerSideProps({ query }) {
   const { data } = await axios.get(`${BASE_URL}/api/actor?id=${query.id}`)
   return {
      props: {
         actor: data,
      }
   }
}
