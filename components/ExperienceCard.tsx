import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
            md:w-[600px] xl:w-[900px] snap-center bg-[#6B9AC4] hover:opacity-100 opacity-40
            cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='data:image/png;base64,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'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4-xl font-light'>
                    Job Title
                </h4>
                <p className='font-bold text-2xl mt-1'>
                    Company Name
                </p>
                <div className='flex space-x-2 my-2'>
                    <div className='h-10 w-10 rounded-full'>
                        {/* Tech used */}
                    </div>
                    <div className='h-10 w-10 rounded-full'>
                        {/* Tech used */}
                    </div>
                    <div className='h-10 w-10 rounded-full'>
                        {/* Tech used */}
                    </div>
                </div>
                <p className='uppercase py-5 text-[#F4B942]'>
                    Dates
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard