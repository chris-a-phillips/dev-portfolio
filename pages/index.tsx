import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/ExperienceSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import { WorkExperience, Project, Logo } from '../typings'
import { experienceData } from '../data/ExperiencesData'
import { projectData } from '../data/ProjectsData'
import { skillData } from '../data/SkillsData'

// TODO: ADD OTHER TECHNOLOGIES
// TODO: ADD PROJECTS
// TODO: MAKE SURE ALL LINKS WORK
// TODO: ADD RESUME LINK
// TODO: ADD ACTUAL ADJECTIVES IN HERO SECTION
// TODO: ADD SEPARATE PICTURE FOR ABOUT SECTION
// TODO: FIX SECTION HEADER STYLING (THEY NEED TO BE LOWERED AND NOT IN SAME LEVEL AS HEADER LINK)
// TODO: FIX MEDIA QUERY STYLING

type Props = {
    experiences: WorkExperience[];
    projects: Project[];
    skills: Logo[];
}


const Home = ({ experiences, projects }: Props) => {
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
                <Experience experiences={experienceData}/>
            </section>
            <section id='skills' className='snap-start'>
                <SkillsSection skills={skillData}/>
            </section>
            <section id='projects' className='snap-start'>
                <Projects projects={projectData}/>
            </section>
            <section id='contact' className='snap-start'>
                <Contact />
            </section>
                <Footer />
        </div>
    )
}

export default Home