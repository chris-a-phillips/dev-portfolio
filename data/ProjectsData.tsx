import { Project } from "../typings"
import { technologies } from "./TechnologiesData"
export const projectData: [Project] = [
    {
        _id: 1,
        projectName: 'test',
        projectImage: {
            imageUrl: '',
            alt: ''
        },
        description: '',
        deployedUrl: '',
        githubLink: '',
        technologies: [
            technologies.javascript,
        ],
    }
]

