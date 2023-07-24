import Image from 'next/image'
import React from 'react'
import SkillsItem from './SkillsItem'

export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#4d5d53]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <SkillsItem
                    img='/../public/assets/html.png'
                    item='HTML'
                    link='https://developer.mozilla.org/en-US/docs/Web/HTML'
                />

                <SkillsItem
                    img='/../public/assets/css.png'
                    item='CSS'
                    link='https://developer.mozilla.org/en-US/docs/Web/CSS'
                />

                <SkillsItem
                    img='/../public/assets/github.png'
                    item='Github'
                    link='https://github.com/'
                />

                <SkillsItem
                    img='/../public/assets/javascript.png'
                    item='Javascript'
                    link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                />

                <SkillsItem
                    img='/../public/assets/node.png'
                    item='NodeJs'
                    link='https://nodejs.org/en'
                />

                <SkillsItem
                    img='/../public/assets/nextjs.png'
                    item='NextJs'
                    link='https://nextjs.org/'
                />

                <SkillsItem
                    img='/../public/assets/react.png'
                    item='React'
                    link='https://react.dev/'
                />

                <SkillsItem
                    img='/../public/assets/tailwind.png'
                    item='Tailwind'
                    link='https://tailwindcss.com/'
                />

                <SkillsItem
                    img='/../public/assets/aws.png'
                    item='AWS'
                    link='https://aws.amazon.com/'
                />

                <SkillsItem
                    img='/../public/assets/firebase.png'
                    item='Firebase'
                    link='https://firebase.google.com/'
                />

                <SkillsItem
                    img='/../public/assets/shopify.png'
                    item='Shopify'
                    link='https://www.shopify.com/ca'
                />

            </div>
        </div>
    </div>
  )
}

export default Skills