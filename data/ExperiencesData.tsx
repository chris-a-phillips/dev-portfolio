import { WorkExperience } from "../typings"
import { technologies } from "./TechnologiesData"


export const experienceData: WorkExperience[] = [
    {
        _id: 1,
        companyName: 'Built Technologies',
        companyLogo: {
            _id: 1,
            image: '/built-logo.svg',
            alt: 'Built'
        },
        jobTitle: 'Software Engineer',
        jobDuties: [
            'Create ETO pipelines for data conversion with Python, MySQL and Docker images with client data',
            'Utilize Python for onboarding and prop loading messy data and reports into a standardized format',
            'Utilize AWS to merge files into SQL database and ensure platform and full suite of products can use data'
        ],
        startDate: 'March 2022',
        endDate: 'current',
        technologies: [
            technologies.python,
            technologies.aws,
            technologies.docker,
            technologies.luigi,
            technologies.pandas,
        ],
    },
    {
        _id: 3,
        companyName: 'Workday',
        companyLogo: {
            _id: 1,
            image: '/workday-logo.svg',
            alt: 'Workday'
        },
        jobTitle: 'Software Engineer',
        jobDuties: [
            'Utilize Java and its libraries in programming frameworks and adhere to object oriented principles',
            'Employ specialized tools to create and improve web services using REST and SOAP protocol B2B integrations',
            ' Employ agile methodologies in cross functional team with platforms like Jira, Crucible, Github, etc'
        ],
        startDate: 'June 2021',
        endDate: 'December 2021',
        technologies: [
            technologies.java,
            technologies.git,
            technologies.postman,
            technologies.jenkins,
        ],
    },
    {
        _id: 3,
        companyName: 'Volo',
        companyLogo: {
            _id: 1,
            image: '/volo-logo.svg',
            alt: 'Volo'
        },
        jobTitle: 'Software Engineer',
        jobDuties: [
            'Implemented frontend changes and various APIs to improve site usability and end user experience',
            'Created MongoDB queries on the backend connected with GraphQL',
            'Utilized React as a framework in combination with Node.js, Mongoose, Express MVC, and Google Maps API'
        ],
        startDate: 'April 2021',
        endDate: 'June 2021',
        technologies: [
            technologies.reactjs,
            technologies.mongodb,
            technologies.graphql,
            technologies.mongoose,
            technologies.express,
        ],
    },
    {
        _id: 4,
        companyName: 'General Assembly',
        companyLogo: {
            _id: 1,
            image: '/general-assembly-logo.svg',
            alt: 'General Assembly'
        },
        jobTitle: 'Software Engineer Immersive Fellow',
        jobDuties: [
            'Three-month, 420-hour full-time and full-stack program conducted in a remote setting',
            'Gained experience with the latest front-end and back-end programming languages, tools, and methodologies',
            'Created Code Finesse Github organization to help new engineers learn fundamentals'
        ],
        startDate: 'April 2021',
        endDate: 'June 2021',
        technologies: [
            technologies.javascript,
            technologies.reactjs,
            technologies.python,
            technologies.django,
            technologies.jest,
        ],
    },
]
