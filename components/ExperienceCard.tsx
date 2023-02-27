import React from 'react'
import { motion } from 'framer-motion'
import { WorkExperience } from '../typings'
import Image from 'next/image'


type Props = {
    experience: WorkExperience
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
            md:w-[600px] xl:w-[900px] snap-center bg-[#6B9AC4] hover:opacity-100 opacity-40
            cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            initial={{
                y: -100,
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
            />
            <Image
                className='w-32 h-32 xl:w-[200px] xl:h-[200px] object-center'
                key={experience.companyLogo._id}
                src={experience.companyLogo.image}
                alt={experience.companyLogo.alt}
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4-xl font-light'>
                    {experience.jobTitle}
                </h4>
                <p className='font-bold text-2xl mt-1'>
                    {experience.companyName}
                </p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology) => {
                        return(
                            <Image
                                className='h-16 w-16 rounded-full'
                                key={technology._id}
                                src={technology.image}
                                alt={technology.alt}
                            />
                        )
                    })}
                </div>
                <p className='uppercase py-5 text-[#F4B942]'>
                    {experience.startDate} - {experience.endDate}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#6B9AC4]'>
                    {experience.jobDuties.map((duty) => {
                        return(
                            <li key={duty}>
                                {duty}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard