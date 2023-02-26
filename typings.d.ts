import { IconType } from "react-icons";

interface Logo {
    _id: number;
    logo: HTMLImageElement;
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
    technologies: Image[];
}


export interface Project {
    _id: number;
    projectName: string;
    description: string;
    deployedUrl: string;
    githubLink: string;
    technologies: Image;
}

