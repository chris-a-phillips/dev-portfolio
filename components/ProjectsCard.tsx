import React from 'react'
import { FaGithubSquare, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { Project } from '../typings'
import Image from 'next/image'
import Link from 'next/link';



type Props = {
    project: Project
}

const ProjectsCard = ({ project }: Props) => {
    return (
        <div>
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <h4 className='text-4xl font-semibold text-center underline decoration-[#97D8C4]'>
                            {project.projectName}
                        </h4>
                <motion.img
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    src={project.projectImage.imageUrl}
                    alt=''
                />
                <div className='flex space-x-2 my-2'>
                    {project.technologies.map((technology) => {
                        return(
                            <div key={technology._id}>
                                <Image
                                    className='h-10 w-10 rounded-full'
                                    src={technology.image}
                                    alt={technology.alt}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <br />
                <p className='text-lg text-center md:text-left'>
                    {project.description}
                </p>
                <div className='flex flex-row space-x-4 items-center'>
                    {project.githubLink ?
                        <Link
                            target='_blank'
                            href={project.githubLink}>
                            <FaGithubSquare />
                        </Link>
                    : null}
                    {project.deployedUrl ?
                        <Link
                            target='_blank'
                            href={project.deployedUrl}>
                            <FaGlobe />
                        </Link>
                    : null}
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard