import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Educations} from '../../typing'


const query = groq`
*[_type == "education"]

`;

type Data = {
    educations:Educations[]
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const educations:Educations[] = await sanityClient.fetch(query)
    res.status(200).json({educations})
  }