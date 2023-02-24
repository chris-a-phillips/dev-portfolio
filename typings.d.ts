export interface Experience {
    companyName: string;
    jobTitle: string;
    jobDuties: string[];
    dateStarted: string;
    dateEnded: string;
    technologies: string[];
}


export interface Project {
    projectName: string;
    description: string;
    deployedUrl: string;
    githubLink: string;
    technologies: string[];
}