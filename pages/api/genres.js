import { request } from '../../utils/common';

export default async function handler(req, res) {
   try {
      const { genre } = req.query
      const data = await request({
         url: `title/v2/get-popular-movies-by-genre`, 
         params: {
            genre
         }
      })
      
      if (data) res.status(200).json({ data })
   } catch (error) {
      console.log(error);
      res.status(500).json('Error during fetching movies')
   }
}