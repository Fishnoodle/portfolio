import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import naImg from '../public/NA.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5C7457]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                    title='Project Number 1'
                    description='N/A'
                    backgroundImg={naImg}
                    projectUrl='/project1'
                />
                <ProjectItem
                    title='Project Number 2'
                    description='N/A'
                    backgroundImg={naImg}
                    projectUrl='javascript:void(0);'
                />
                <ProjectItem
                    title='Project Number 3'
                    description='N/A'
                    backgroundImg={naImg}
                    projectUrl='javascript:void(0);'
                />
                <ProjectItem
                    title='Project Number 4'
                    description='N/A'
                    backgroundImg={naImg}
                    projectUrl='javascript:void(0);'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects