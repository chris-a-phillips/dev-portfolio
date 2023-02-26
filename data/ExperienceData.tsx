import { WorkExperience } from "../typings"
import pythonLogo from '../public/static/python logo.svg'
import awsLogo from '../public/static/aws logo.svg'


export const experienceData: [WorkExperience] = [
    {
        _id: 1,
        companyName: 'Built Technologies',
        jobTitle: 'Software Engineer',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'March 2023',
        endDate: 'current',
        technologies: [
            {
                _id: 1,
                logo: pythonLogo,
                alt: 'python'
            },
            {
                _id: 2,
                icon: awsLogo,
                alt: 'aws'
            }
        ],
    }
]
