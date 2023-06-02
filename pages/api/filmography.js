import { request } from '../../utils/common';

export default async function Actor(req, res) {
   try {
      const { id } = req.query
      const data = await request({
         url: `actors/get-all-filmography`, params: {
            nconst: id
         }
      })
      console.log(data);
      if (data) res.status(200).json({ data })
   } catch (error) {
      console.log(error);
      res.status(500).json('Error during fetching actor')
   }
}
