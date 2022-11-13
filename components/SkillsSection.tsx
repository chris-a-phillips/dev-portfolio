import React from 'react'
import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon'

type Props = {}

const Skills = (props: Props) => {
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
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-36 uppercase tracking-[20px] text-[#F4B942] text-2xl'>
                Skills
            </h3>
            <h3 className='absolute top-48 uppercase tracking-[3px] text-[#F4B942] text-sm opacity-60'>
                Hover over a skill for amount of experience
            </h3>
            <div className='grid grid-cols-4 gap-5'>
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
            </div>
        </motion.div>
    )
}

export default Skills