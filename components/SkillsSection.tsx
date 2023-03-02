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
                {skills.slice(0, 4).map((skill) => {
                    return(
                        <div key={0}>
                            <SkillIcon skill={skill} directionLeft={true}/>
                        </div>
                    )
                })}
                {skills.slice(4, 8).map((skill) => {
                    return(
                        <div key={1}>
                            <SkillIcon skill={skill} directionLeft={false}/>
                        </div>
                    )
                })}
                {skills.slice(8, 12).map((skill) => {
                    return(
                        <div key={2}>
                            <SkillIcon skill={skill} directionLeft={true}/>
                        </div>
                    )
                })}
                {skills.slice(12, 16).map((skill) => {
                    return(
                        <div key={3}>
                            <SkillIcon skill={skill} directionLeft={false}/>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default SkillsSection