import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/ExperienceSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/SkillsSection'

export default function Home() {
    return (
        <div className='bg-sky-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
            <section id='experience' className='snap-center'>
                <Experience />
            </section>
            <section id='skills' className='snap-start'>
                <Skills />
            </section>
            <section id='projects' className='snap-start'>
                <Projects />
            </section>

            {/* TODO: CONTACT */}

        </div>
    )
}
