import React from 'react'
import Image from 'next/image'
import { Slide } from 'react-slideshow-image'
import Link from 'next/link';
import PhotoSlider from './PhotoSlider'

export const About = () => {

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        arrows: false,
        indicators: true
    }

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#4d5d53]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-500'>// I'm not a normal developer</p>
                <p className='py-2 text-gray-500'> 
                    Hello! I am a passionate and results-driven Developer with a keen
                    interest in creating intuitive and user-friendly web and mobile applications.
                    My journey in the tech world has allowed me to specialize in designing and implementing
                    user interface components using the React ecosystem, along with expertise in React
                    Native and TypeScript. With a background in providing top-notch customer success
                    and technical support, I take pride in my ability to deliver efficient solutions
                    and excellent presentations to both technical and non-technical audiences.
                    My commitment to continuous learning and problem-solving, combined with my
                    proficiency in JavaScript, Jira, and collaboration tools like Slack, has
                    enabled me to thrive in fast-paced and challenging environments. I'm
                    excited to leverage my skills and experiences to contribute to impactful
                    projects and work collaboratively with teams in creating innovative solutions.
                    Let's connect and build something amazing together!
                </p>
                <Link href='/#projects'>
                    <p className='py-2 text-gray-500 underline cursor-pointer'> Check out some of my latest projects.</p>
                </Link>
            </div>
            <div className='w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                {/* <Image className='rounded-xl' src={AboutImg} alt='/' /> */}
                <PhotoSlider />
            </div>
        </div>
    </div>
  )
}

export default About