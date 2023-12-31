import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SkillsItem = ({img, item, link}) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Link href={link} target='_blank'>
                    <Image
                        src={img}
                        width='64'
                        height='64'
                        alt='/'
                    />
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h4>{item}</h4>
            </div>
        </div>
    </div>
  )
}

export default SkillsItem