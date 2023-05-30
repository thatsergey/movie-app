// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { request } from '../../utils/common';

export default async function handler(req, res) {
    try {
      const data = await request({ url: `title/get-most-popular-movies` })
      console.log(data);
      res.status(200).json({ data })
    } catch (error) {
      console.log(error);
      res.status(500).json('Error during fetching movies')
    }
}
