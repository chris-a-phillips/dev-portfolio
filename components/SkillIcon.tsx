import React from 'react'
import { motion } from 'framer-motion'
import { IoLogoJavascript } from 'react-icons/io'

type Props = {
    directionLeft?: boolean
}

const SkillIcon = ({ directionLeft }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
        <motion.img
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
        className='rounded-lg border border-[#6B9AC4] object-cover h-24 w-24 md:w-28 md:h-28 xl:w032 xl:h-32 filter group-hover:brightness-150 transition duration-300 ease-in-out'
        src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w032 xl:h-32 rounded-lg z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    100
                </p>
            </div>
        </div>
    </div>
    )
}

export default SkillIcon