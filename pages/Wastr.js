import Image from 'next/image'
import React from 'react'
import WastrImg from '../public/Wastr.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const project2 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={WastrImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Wastr</h2>
                <h3>Role: UX/UI Designer</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='uppercase text-xl tracking-widest text-[#4d5d53] pb-4'>Project</p>
                <h3>Problem Domain</h3>
                <p>
                    Our problem domain revolves around food. The objective of our mobile website is to
                    reduce food waste around our communities. We would give people the opportunity to
                    share their excess food to their community. All would be free of charge, except for
                    a small fee if the user wants the food delivered. People would be able to create a
                    listing by adding a photo, title, and description. 
                </p>
                <Link href='https://www.figma.com/file/7h08lIkr3cjtzlIk6Cgme0/User-Flows?node-id=0%3A1' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>Figma</button>
                </Link>
                <Link href='https://inky-spot-c57.notion.site/Wastr-e9a9a7f273354b939c3b764e6e8a3c88?pvs=4' target='_blank'>
                    <button className='px-8 py-2 mt-4'>Documentation</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols- md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> UX/UI</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Figma</p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default project2