import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Social } from "../typing";

const query = groq`
  *[_type == "social"]
`
export const fetchSocials = async () => {
    const res =  await sanityClient.fetch(query)

   
    const socials: Social[] = res;

    return socials;
}