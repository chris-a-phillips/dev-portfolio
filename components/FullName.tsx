import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const SoftwareEngineer = (props: Props) => {
    const firstName = ['C', 'h', 'r', 'i', 's']
    const lastName = ['P', 'h', 'i', 'l', 'l', 'i', 'p', 's']

    return (
        <div className='text-sm uppercase text-[#F4B942] pb-2 tracking-[15px]'>
            {firstName.map((letter, index) => {
                return(
                    <motion.div
                        key={index}
                        initial={{
                            x: Math.random()*1000,
                            y: Math.random()*1000,
                            opacity: 0,
                            scale: 4
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 2
                        }}
                        transition={{
                            duration: index + .5
                        }}
                        className='inline-block'>
                        {letter}
                    </motion.div>
                )
            })}
            <div className='inline-block text-sky-800'>
                _
            </div>
            {lastName.map((letter, index) => {
                return(
                    <motion.div
                        key={index}
                        initial={{
                            x: Math.random()*1000,
                            y: Math.random()*1000,
                            opacity: 0,
                            scale: 4
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 2
                        }}
                        transition={{
                            duration: index + .5
                        }}
                        className='inline-block'>
                        {letter}
                    </motion.div>
                )
            })}
        </div>
    )
}

export default SoftwareEngineer