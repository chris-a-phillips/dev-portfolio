import React from 'react'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion'
import Link from 'next/link';
// import Pdf from '../public/static/Chris Phillips Resume.pdf'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 p-16 flex items-start text-teal-500 justify-between max-w-7xl mx-auto z-20 xl:items-center cursor-pointer'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 2
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row space-x-6 items-center'>
                    <Link
                        target='_blank'
                        href='https://github.com/chris-a-phillips'>
                        <AiFillGithub/>
                    </Link>
                    <Link
                        target='_blank'
                        href='https://www.linkedin.com/in/chris-a-phillips/'>
                        <BsLinkedin
                        />
                    </Link>
                    {/* <Link
                        href={Pdf}
                        target='_blank'
                        // locale={false}
                        >
                        <FaWpforms />
                    </Link> */}
            </motion.div>
            <Link
                href='#contact'>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1.5
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='flex flex-row space-x-2 items-start text-teal-500 cursor-pointer'>
                        <AiOutlineMail />
                        <p className='uppercase hidden md:inline-flex text-sm text-teal-400'>Contact Me</p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header