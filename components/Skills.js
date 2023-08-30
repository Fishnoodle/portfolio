import Image from 'next/image'
import React from 'react'
import SkillsItem from './SkillsItem'
import AWS from '../public/assets/aws.png'
import CSS from '../public/assets/css.png'
import Firebase from '../public/assets/firebase.png'
import Github from '../public/assets/github.png'
import HTML from '../public/assets/html.png'
import Javascript from '../public/assets/javascript.png'
import NextJs from '../public/assets/nextjs.png'
import NodeJs from '../public/assets/node.png'
import ReactPNG from '../public/assets/react.png'
import Python from '../public/assets/python.png'
import MySQL from '../public/assets/mysql.png'
import Nginx from '../public/assets/nginx.png'
import Docker from '../public/assets/docker.png'
import Jenkins from '../public/assets/jenkins.png'


export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#4d5d53]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <SkillsItem
                    img={HTML}
                    item='HTML'
                    link='https://developer.mozilla.org/en-US/docs/Web/HTML'
                />

                <SkillsItem
                    img={CSS}
                    item='CSS'
                    link='https://developer.mozilla.org/en-US/docs/Web/CSS'
                />

                <SkillsItem
                    img={Github}
                    item='Github'
                    link='https://github.com/'
                />

                <SkillsItem
                    img={Javascript}
                    item='Javascript'
                    link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                />

                <SkillsItem
                    img={Python}
                    item='Python'
                    link='https://www.python.org/'
                />

                <SkillsItem
                    img={NodeJs}
                    item='NodeJs'
                    link='https://nodejs.org/en'
                />

                <SkillsItem
                    img={NextJs}
                    item='NextJs'
                    link='https://nextjs.org/'
                />

                <SkillsItem
                    img={ReactPNG}
                    item='React'
                    link='https://react.dev/'
                />

                <SkillsItem
                    img={AWS}
                    item='AWS'
                    link='https://aws.amazon.com/'
                />

                <SkillsItem
                    img={Firebase}
                    item='Firebase'
                    link='https://firebase.google.com/'
                />

                <SkillsItem
                    img={MySQL}
                    item='MySQL'
                    link='https://www.mysql.com/'
                />

                <SkillsItem
                    img={Nginx}
                    item='Nginx'
                    link='https://www.nginx.com/'
                />

                <SkillsItem
                    img={Docker}
                    item='Docker'
                    link='https://www.docker.com/'
                />

                <SkillsItem
                    img={Jenkins}
                    item='Jenkins'
                    link='https://www.jenkins.io/'
                />


            </div>
        </div>
    </div>
  )
}

export default Skills