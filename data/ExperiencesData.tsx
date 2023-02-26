import { WorkExperience } from "../typings"
import builtLogo from '../public/static/built-logo.svg'
import workdayLogo from '../public/static/workday-logo.svg'
import voloLogo from '../public/static/volo-logo.svg'
import generalAssemblyLogo from '../public/static/general-assembly-logo.svg'

import pythonLogo from '../public/static/python-logo.svg'
import awsLogo from '../public/static/aws-logo.svg'


export const experienceData: WorkExperience[] = [
    {
        _id: 1,
        companyName: 'Built Technologies',
        companyLogo: {
            _id: 1,
            logo: builtLogo,
            alt: 'Built'
        },
        jobTitle: 'Software Engineer',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'March 2022',
        endDate: 'current',
        technologies: [
            {
                _id: 1,
                logo: pythonLogo,
                alt: 'python'
            },
            {
                _id: 2,
                logo: awsLogo,
                alt: 'aws'
            }
        ],
    },
    {
        _id: 3,
        companyName: 'Workday',
        companyLogo: {
            _id: 1,
            logo: workdayLogo,
            alt: 'Workday'
        },
        jobTitle: 'Software Engineer',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'June 2021',
        endDate: 'December 2021',
        technologies: [
            {
                _id: 1,
                logo: pythonLogo,
                alt: 'python'
            },
            {
                _id: 2,
                logo: awsLogo,
                alt: 'aws'
            }
        ],
    },
    {
        _id: 3,
        companyName: 'Volo',
        companyLogo: {
            _id: 1,
            logo: voloLogo,
            alt: 'Volo'
        },
        jobTitle: 'Software Engineer',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'April 2021',
        endDate: 'June 2021',
        technologies: [
            {
                _id: 1,
                logo: pythonLogo,
                alt: 'python'
            },
            {
                _id: 2,
                logo: awsLogo,
                alt: 'aws'
            }
        ],
    },
    {
        _id: 4,
        companyName: 'General Assembly',
        companyLogo: {
            _id: 1,
            logo: generalAssemblyLogo,
            alt: 'General Assembly'
        },
        jobTitle: 'Software Engineer Immersive Fellow',
        jobDuties: ['this', 'that', 'other'],
        startDate: 'April 2021',
        endDate: 'June 2021',
        technologies: [
            {
                _id: 1,
                logo: pythonLogo,
                alt: 'python'
            },
            {
                _id: 2,
                logo: awsLogo,
                alt: 'aws'
            }
        ],
    },
]
