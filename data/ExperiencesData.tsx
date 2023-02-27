import { WorkExperience } from "../typings"
import { technologies } from "./TechnologiesData"
import builtLogo from '../public/static/built-logo.svg'
import workdayLogo from '../public/static/workday-logo.svg'
import voloLogo from '../public/static/volo-logo.svg'
import generalAssemblyLogo from '../public/static/general-assembly-logo.svg'


export const experienceData: WorkExperience[] = [
    {
        _id: 1,
        companyName: 'Built Technologies',
        companyLogo: {
            _id: 1,
            image: builtLogo,
            alt: 'Built'
        },
        jobTitle: 'Software Engineer',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'March 2022',
        endDate: 'current',
        technologies: [
            technologies.python,
            technologies.aws,
        ],
    },
    {
        _id: 3,
        companyName: 'Workday',
        companyLogo: {
            _id: 1,
            image: workdayLogo,
            alt: 'Workday'
        },
        jobTitle: 'Software Engineer',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'June 2021',
        endDate: 'December 2021',
        technologies: [
            
        ],
    },
    {
        _id: 3,
        companyName: 'Volo',
        companyLogo: {
            _id: 1,
            image: voloLogo,
            alt: 'Volo'
        },
        jobTitle: 'Software Engineer',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'April 2021',
        endDate: 'June 2021',
        technologies: [
            
        ],
    },
    {
        _id: 4,
        companyName: 'General Assembly',
        companyLogo: {
            _id: 1,
            image: generalAssemblyLogo,
            alt: 'General Assembly'
        },
        jobTitle: 'Software Engineer Immersive Fellow',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'April 2021',
        endDate: 'June 2021',
        technologies: [
            
        ],
    },
]
