import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const Experience = (props: Props) => {
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
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='sectionTitle'>
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#97D8C4]'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}

export default Experience