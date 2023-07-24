import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import naImg from '../public/NA.png'
import VSC from '../public/VSC.png'
import Kodak from '../public/Kodak.png'
import Portfolio from '../public/Portfolio.png'
import SmartRoster from '../public/SmartRoster.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5C7457]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                    title='Vancouver Sai Center Website'
                    description='In Development For New Redesign'
                    backgroundImg={VSC}
                    projectUrl='/VancouverSaiCenter'
                />
                <ProjectItem
                    title='SMART Roster'
                    description='Automated Nursing Assignment Planning'
                    backgroundImg={SmartRoster}
                    projectUrl='javascript:void(0);'
                />
                <ProjectItem
                    title='Kodetic Photography Website'
                    description='In Development For New Redesign'
                    backgroundImg={Kodak}
                    projectUrl='/Kodak'
                />
                <ProjectItem
                    title='Personal Porfolio'
                    description='You Are Looking At It Right Now!'
                    backgroundImg={Portfolio}
                    projectUrl='/'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects