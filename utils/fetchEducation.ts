import {Educations} from "../typing";

export const fetchEducation= async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`);

    const data = await res.json();
    const educations: Educations[] = data.educations;

    return educations;
}