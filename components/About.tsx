import React from 'react'
import { motion } from 'framer-motion'
import { summary } from '../data/AboutData'

type Props = {}

const About = (props: Props) => {
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
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='sectionTitle'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
                src='https://cphillips.dev/static/media/headshot.5e7823ea.jpeg'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Working to make a{' '}
                    <span className='underline decoration-[#F4B942]/50'>
                        difference
                    </span>
                    {' '}with technology
                </h4>
                <p className='text-base text-center'>
                    {summary}
                </p>
            </div>
        </motion.div>
    )
}

export default About