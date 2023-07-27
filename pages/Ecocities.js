import Image from 'next/image'
import React from 'react'
import Ecocities from '../public/Ecocities.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const project2 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={Ecocities} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Ecocities</h2>
                <h4>Role: Software Developer | CopyWriting </h4>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='uppercase text-xl tracking-widest text-[#4d5d53] pb-4'>Project</p>
                <h4>Abstract</h4>
                <p>
                    The development of energy-efficient housing technologies
                    is essential to counter the damage caused by global
                    warming and population growth. This paper demonstrates the
                    effectiveness of passive housing in reducing energy consumption
                    and ensuring the internal environment’s comfort. Upon examining
                    the current trends in Vancouver, and other provinces in
                    Canada, passive housing technologies are not commonly utilized,
                    and their development is relatively slow. Therefore, passive houses
                    minimally contributed to energy savings in Canada.
                </p>
                <Link href='https://www.overleaf.com/3597477932mkygpvwdmgnq' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>OverLeaf</button>
                </Link>
                
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Python</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> OverLeaf</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Microsoft Office</p>
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