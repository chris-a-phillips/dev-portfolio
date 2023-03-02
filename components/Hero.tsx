import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import FullName from './FullName';
import headshotImage from 'public/static/headshot.jpeg'


type Props = {}

const Hero = (props: Props) => {
    const [delay, setDelay] = useState(false)
    const [text] = useTypewriter({
        words: [
            'Art Creator',
            'softwareEngineer',
            'data_engineer',
            'GameDeveloper',
        ],
        loop: true,
        delaySpeed: 1500
    });

    const test = () => {
        setTimeout(function(){
            setDelay(true)
        }, 4500);
    }
    test()

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
            height={70}
            width={70}
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={headshotImage.src}
            alt='Chris Phillips headshot'
            />
            <div className='z-20'>
                <h2>
                    <FullName />
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    {delay ? (
                        <span>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.5
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 2.5
                                }}
                                >
                                {text}
                                <Cursor cursorColor='#F4B942' cursorStyle='▋'/>
                            </motion.div>
                        </span>
                    ) : <span className='text-sky-800'>placeholder</span>}
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero