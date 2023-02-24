import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/ExperienceSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/SkillsSection'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

// TODO: ADD FOOTER SECTION
// TODO: ADD RESUME LINK
export default function Home() {
    return (
        <div className='bg-sky-800 text-white h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll overflow-x-hidden z-0
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#97D8C4]'>
            <Head>
                <title>Chris Phillips | Software Engineer</title>
            </Head>
            <Header />
            <section id='hero' className='snap-center'>
                <Hero />
            </section>
            <section id='about' className='snap-start'>
                <About />
            </section>
            <section id='experience' className='snap-start'>
                <Experience />
            </section>
            <section id='skills' className='snap-start'>
                <Skills />
            </section>
            <section id='projects' className='snap-start'>
                <Projects />
            </section>
            <section id='contact' className='snap-start'>
                <Contact />
            </section>
            <Link href='#hero'>
                <footer className='sticky bottom-5 w-full cursor-pointer'>
                    <div
                        className='flex items-center justify-center'
                    >
                        <BsFillArrowUpCircleFill
                            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 bg-sky-500'/>
                    </div>
                </footer>
            </Link>
        </div>
    )
}
