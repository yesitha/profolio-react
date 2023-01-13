import { Image } from "@sanity/types";

interface SanityBody{
    createdAt: string;
    updatedAt: string;
    _id: string;
    _rev: string;
}

interface image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
  }
export interface Technology extends SanityBody{
    _type: "skill";
   Image:Image;
   progress:number;
    title:string;
}

export interface Skill extends SanityBody{
    _type: "skill";
    title:string;
    progress:number;
    title:String
    Image:Image;
}
export interface Project extends SanityBody{
    title: string;
    _type: "project";
    Image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
}
export interface Educations extends SanityBody{
    _type: "education";
    institute: string;
    instituteImage:Image;
    dateStart: date;
    dateEnd: date;
    degree: string;
    isCurrentlyWorkingHere: boolean;
    points: string[];

}
export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}