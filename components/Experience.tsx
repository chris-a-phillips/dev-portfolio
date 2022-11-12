import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Experience = (props: Props) => {
    return (
        <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='sectionTitle'>
                Experience
            </h3>
            <div></div>
        </motion.div>
    )
}

export default Experience