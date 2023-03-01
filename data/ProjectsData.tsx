import { Project } from "../typings"
import { technologies } from "./TechnologiesData"


export const projectData: Project[] = [
    {
        _id: 1,
        projectName: 'Human Principle',
        projectImage: {
            imageUrl: '',
            alt: ''
        },
        description: 'Track how your team is feeling mentally, physically, and emotionally',
        deployedUrl: '',
        githubLink: 'https://github.com/chris-a-phillips/human-principle-frontend',
        technologies: [
            technologies.python,
            technologies.django,
            technologies.javascript,
            technologies.reactjs,
        ],
    },
    {
        _id: 2,
        projectName: 'Enter the Faang',
        projectImage: {
            imageUrl: '',
            alt: ''
        },
        description: 'A card game in which the player will face randomly generated units.',
        deployedUrl: '',
        githubLink: 'https://github.com/chris-a-phillips/enter-the-faang',
        technologies: [
            technologies.javascript,
            technologies.reactjs,
            technologies.bootstrap,
        ],
    },
    {
        _id: 3,
        projectName: 'Gitwrap',
        projectImage: {
            imageUrl: '',
            alt: ''
        },
        description: 'Choose your next gift and add it to your favorites with this gift guide app',
        deployedUrl: '',
        githubLink: 'https://github.com/anonymous-animals/gitwrap-frontend',
        technologies: [
            technologies.mongoose,
            technologies.reactjs,
            technologies.node,
            technologies.javascript,
        ],
    },
    {
        _id: 4,
        projectName: 'Relocate Me',
        projectImage: {
            imageUrl: '',
            alt: ''
        },
        description: 'Find information about the next city you\'re thinking of moving to all across the world',
        deployedUrl: '',
        githubLink: 'https://github.com/chris-a-phillips/relocate-me',
        technologies: [
            technologies.reactjs,
            technologies.javascript,
        ],
    },
]

