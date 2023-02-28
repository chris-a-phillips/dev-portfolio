import React from 'react'
import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon'
import { Logo } from '../typings'

type Props = {
    skills: Logo[];
}

const SkillsSection = ({ skills }: Props) => {
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
            <div className='grid grid-cols-4 gap-5'>
                {skills.slice(0, skills.length / 4).map((skill) => {
                    return(
                        <SkillIcon skill={skill} directionLeft={true}/>
                    )
                })}
                {skills.slice(skills.length / 4, skills.length / 2).map((skill) => {
                    return(
                        <SkillIcon skill={skill} directionLeft={false}/>
                    )
                })}
                {skills.slice(skills.length / 2, skills.length * 0.75).map((skill) => {
                    return(
                        <SkillIcon skill={skill} directionLeft={true}/>
                    )
                })}
                {skills.slice(skills.length * 0.75, skills.length).map((skill) => {
                    return(
                        <SkillIcon skill={skill} directionLeft={false}/>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default SkillsSection