import { Project } from "../typings"
import { technologies } from "./TechnologiesData"


export const projectData: Project[] = [
    {
        _id: 1,
        projectName: 'Human Principle',
        projectImage: {
            imageUrl: 'https://github.com/chris-a-phillips/human-principle-frontend/raw/main/src/images/landing-page.png',
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
            imageUrl: 'https://github.com/chris-a-phillips/enter-the-faang/raw/main/league/src/media/screenshots/test-screenshot.png',
            alt: 'Enter the Faang'
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
            imageUrl: 'https://user-images.githubusercontent.com/69214740/222241878-4c66befc-b497-4a0c-82fd-bed7ec27c2ad.png',
            alt: 'Gitwrap'
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
            imageUrl: 'https://github.com/chris-a-phillips/relocate-me/blob/master/src/media/screenshot-three.png?raw=true',
            alt: 'Relocate Me'
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

