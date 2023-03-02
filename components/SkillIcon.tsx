import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { Logo } from '../typings';

type Props = {
    skill: Logo
    directionLeft?: boolean;
}

const SkillIcon = ({ skill, directionLeft }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
            x: directionLeft ? -200 : 200
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        className='rounded-lg object-cover h-24 w-24 md:w-28 md:h-28 xl:w032 xl:h-32 filter group-hover:brightness-150 transition duration-300 ease-in-out'
        >
            <Image
                width={70}
                height={70}
                key={skill._id}
                src={skill.image}
                alt={skill.alt}
            />
        </motion.div>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w032 xl:h-32 rounded-lg z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skill.alt}
                </p>
            </div>
        </div>
    </div>
    )
}

export default SkillIcon