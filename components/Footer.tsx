import React from 'react';
import Link from 'next/link'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className='sticky bottom-5 w-full cursor-pointer'>
            <Link href='#hero'>
                <div
                    className='flex items-center justify-center'>
                    <BsFillArrowUpCircleFill
                        className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 bg-sky-500'/>
                </div>
            </Link>
        </footer>

    );
};

export default Footer;