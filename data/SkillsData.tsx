import { Skill } from "../typings"
import pythonLogo from '../public/static/python-logo.svg'
import awsLogo from '../public/static/aws-logo.svg'
import mysql from '../public/static/mysql-logo.svg'


export const skillData: Skill[] = [
    {
        name: 'Python',
        skillLogo: {
            _id: 1,
            logo: pythonLogo,
            alt: 'Python',
        }
    },
    {
        name: 'Amazon Web Services',
        skillLogo: {
            _id: 2,
            logo: awsLogo,
            alt: 'aws',
        }
    },
    {
        name: 'MySQL',
        skillLogo: {
            _id: 3,
            logo: mysql,
            alt: 'mysql',
        }
    },
]

