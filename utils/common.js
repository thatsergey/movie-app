import axios from "axios";

export const request = async({ url, params = {} })=>{
   const options = {
      method: 'GET',
      url: `https://online-movie-database.p.rapidapi.com/${url}`,
      params:{
         ...params
      },
      headers: {
         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
         "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
      }
   };
   const { data } = await axios.request(options)
   console.log(data);
   return data;
}