import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import {Educations} from "../typing";

const query = groq`
*[_type == "education"]

`;

export const fetchEducation= async () => {
    const res =  await sanityClient.fetch(query)

    
    const educations: Educations[] = res;

    return educations
}