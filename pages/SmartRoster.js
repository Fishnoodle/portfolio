import Image from 'next/image'
import React from 'react'
import SmartRosterImg from '../public/SmartRoster.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const project2 = () => {
  return (
    <div className='w-full'> 
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={SmartRosterImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Smart Roster</h2>
                <h4>Role: Web Development | UX/UI Designer</h4>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='uppercase text-xl tracking-widest text-[#4d5d53] pb-4'>Project</p>
                <h4>Company Profile</h4>
                <p>
                    Smart Roster is a startup company created by a group of women (nurses) that want
                    to solve the problem of inefficient scheduling in hospitals. This particular
                    project will be trialed in the NICU at BC Women's Hospital.
                </p>
                <h4 className='pt-4'>Project Description</h4>
                <p>
                    The project aim is to develop a web-based application that will match scheduled
                    nurses with a patient assignment, considering variables such as skill set, patient
                    need, and consistency of assignments. The goal would be to reduce time spent
                    creating patient assignments, decrease the number of unintentional errors, and
                    decrease the number of nurses assigned to a patient during their stay. This program
                    would need to be user friendly for a variety of computer literacy levels, have
                    the ability to update in real-time, consider irregular schedules, and meet health
                    authority privacy requirements.
                </p>
                {/* DEMO NOT AVAILABLE; ONLY GITHUB LINK
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                */}
                <Link href='https://github.com/jasleenlodhra/SMART-roster' target='_blank'>
                    <button className='px-8 py-2 mt-4'>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Python</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Flask</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Jinja</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> jQuery</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> MySQL</p>
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