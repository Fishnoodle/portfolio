import React, { useEffect, useState } from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillFileEarmarkPersonFill} from 'react-icons/bs'
import Link from 'next/link'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    
    const showToastMessage = () => {
        navigator.clipboard.writeText('shivar.vishal.pillay@gmail.com');
        toast.success('Successfully copied to clipboard!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    return (
        <div id='home' className='w-full h-screen text-center'>
            <script type="text/javascript" src="About.js"></script>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <span className='uppercase text-sm tracking-widest text-gray-600 blinking-cursor'>Full Stack / Front End / Software Developer</span>
                    <h1 className='py-4 text-gray-700'>Hi, I'm
                        <span className='text-[#5C7457]'> Vishal</span>
                    </h1>
                    {/* <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1> */}
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a developer that likes to create unique and unusual applications
                        with the intent to create pleasing, satisfying products.
                        I am currently looking for new full-time and part-time opportunities!
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://www.linkedin.com/in/shivar-vishal-pillay-47783b132/' target='_blank'>
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://github.com/Fishnoodle' target='_blank'>
                                <FaGithub />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail
                               onClick={showToastMessage}
                            />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://inky-spot-c57.notion.site/f5d0d73fc7e846a893bc8b16aecfe97f?pvs=4' target='_blank'>
                                <BsFillFileEarmarkPersonFill />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Main