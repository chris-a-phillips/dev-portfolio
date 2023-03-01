import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import ProjectsCard from './ProjectsCard';

type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-36 uppercase tracking-[20px] text-[#F4B942] text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#97D8C4]'>
                {projects.map((project) => {
                    return(
                        <ProjectsCard project={project}/>
                    )
                })}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F4B942]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects