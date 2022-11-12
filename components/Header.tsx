import React from 'react'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 p-10 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center cursor-pointer'>
            <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
                    <AiFillGithub />
                    <BsLinkedin />
            </motion.div>
            <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center text-gray-500 cursor-pointer'>
                <AiOutlineMail />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
            </motion.div>
        </header>
    )
}

export default Header