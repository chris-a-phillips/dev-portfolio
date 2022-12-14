import Link from 'next/link';
import React, { useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import SoftwareEngineer from './SoftwareEngineer';

type Props = {}

const Hero = (props: Props) => {
    const [delay, setDelay] = useState(false)
    const [text] = useTypewriter({
        words: [
            'thing 1',
            'Chris Phillips',
            'thing 2'
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
            <img
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='https://cphillips.dev/static/media/headshot.5e7823ea.jpeg'
            />
            <div className='z-20'>
                <h2>
                    <SoftwareEngineer />
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    {delay ? (
                        <span>
                            {text}
                            <Cursor cursorColor='#F4B942' cursorStyle='▋'/>
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