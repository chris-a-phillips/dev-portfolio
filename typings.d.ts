import { IconType } from "react-icons";

export interface Logo {
    _id: number;
    image: HTMLImageElement;
    alt: string;
}

export interface WorkExperience {
    _id: number;
    companyName: string;
    companyLogo: Logo;
    jobTitle: string;
    jobDuties: string[];
    startDate: string;
    endDate: string;
    technologies: Logo[];
}


export interface Project {
    _id: number;
    projectName: string;
    description: string;
    deployedUrl: string;
    githubLink: string;
    technologies: Image;
}

export interface Technologies {
    [key: string]: Logo
}