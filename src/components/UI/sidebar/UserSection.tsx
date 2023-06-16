import Image from 'next/image'
import { profilepic } from 'public/assets/png'
import React from 'react'

export default function UserSection() {
  return (
    <div className='mx-auto my-1 mb-12 mt-10 flex flex-col items-center gap-4'>
      <Image
        src={profilepic}
        alt={''}
        width={50}
        height={50}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
        className='mx-auto rounded-full'
      />

      <p className='font-inter text-primaryBlue-300 text-sm font-semibold '>
        Golam Kebria
      </p>
    </div>
  )
}
