import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
    return (
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
            borderRadius: ['20%', '20%', '50%', '80%', '20%']
        }}
        transition={{
            duration: 4
        }}
        className='relative flex justify-center items-center'>
            <div className='rounded-full border border-[#247fca] h-[500px] w-[500px] absolute mt-52 nimate-pulse'/>
            <div className='rounded-full border border-[#247fca] opacity-20  h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
            <div className='rounded-full border border-[#689AC4] h-[800px] w-[800px] absolute mt-52 nimate-pulse'/>
            <div className='rounded-full border border-[#689AC4] h-[1200px] w-[1200px] absolute mt-52 nimate-pulse'/>
        </motion.div>
    )
}

export default BackgroundCircles