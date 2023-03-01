import React from 'react'
import { FaGithubSquare, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { Project } from '../typings'
import Image from 'next/image'


type Props = {
    project: Project
}

const ProjectsCard = ({ project }: Props) => {
    return (
        <div>
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <h4 className='text-4xl font-semibold text-center underline decoration-[#97D8C4]'>
                            name: {project.projectName}
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
                    src=''
                    alt=''
                />
                <div className='flex space-x-2 my-2'>
                    {project.technologies.map((technology) => {
                        return(
                            <Image
                                className='h-10 w-10 rounded-full'
                                key={technology._id}
                                src={technology.image}
                                alt={technology.alt}
                            />
                        )
                    })}
                </div>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <br />
                <p className='text-lg text-center md:text-left'>
                    description: {project.description}
                </p>
                <div className='flex flex-row space-x-4 items-center'>
                    {project.githubLink ?
                    <FaGithubSquare />
                    : null}
                    {project.deployedUrl ?
                    <FaGlobe />
                    : null}
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard