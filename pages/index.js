import Head from 'next/head'
import Image from 'next/image'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishal Pillay | Portfolio</title>
        <meta name="This is my portfolio" content="Generated with next.js" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
