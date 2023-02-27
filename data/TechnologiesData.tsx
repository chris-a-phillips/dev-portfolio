import { Technologies } from '../typings'
import pythonLogo from '../public/static/python-logo.svg'
import awsLogo from '../public/static/aws-logo.svg'
import mysqlLogo from '../public/static/mysql-logo.svg'


export const technologies: Technologies = {
    python: {
        _id: 1,
        image: pythonLogo,
        alt: 'python'
    },
    aws: {
        _id: 2,
        image: awsLogo,
        alt: 'aws'
    },
    mysql: {
        _id: 3,
        image: mysqlLogo,
        alt: 'mysql'
    }
}
