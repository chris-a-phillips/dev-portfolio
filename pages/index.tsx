import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
    return (
        <div className='bg-sky-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
            <Head>
                <title>Chris Phillips | Software Engineer</title>
            </Head>

            <Header />

            {/* TODO: HERO */}
            <section id='hero' className='snap-center'>
                <Hero />

            </section>

            {/* TODO: ABOUT */}

            {/* TODO: EXPERIENCE */}

            {/* TODO: SKILLS */}

            {/* TODO: PROJECTS */}

            {/* TODO: CONTACT */}

        </div>
    )
}
