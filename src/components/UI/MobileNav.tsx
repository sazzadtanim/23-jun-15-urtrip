import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { profilepic } from 'public/assets/png'
import CompanyInfo from './sidebar/CompanyInfo'
import { sidebarItems } from '~data/sidebarList'

function ProfilePic(): React.JSX.Element {
  return (
    <div className=''>
      <Image
        src={profilepic}
        alt={''}
        width={40}
        height={40}
        className='rounded-full'
      />
    </div>
  )
}

// submenu ? <ul>submenu.map()<ul> : <li></li>

function Hamburger(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=''>
      {/* Icon */}
      <label
        tabIndex={0}
        className='btn-ghost btn lg:hidden'
        onClick={() => setIsOpen(prev => !prev)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </label>

      <ul
        className={`menu-compact dropdown-content menu rounded-box z-[1000] mt-3 w-52 bg-base-100 p-2 shadow-2xl ${
          isOpen ? 'absolute' : 'hidden'
        }`}
      >
        {sidebarItems.map(item => (
          <li key={item.title} onClick={() => setIsOpen(!isOpen)}>
            <Link href={item.url}>
              <span className='capitalize'>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function MobileNav(): JSX.Element {
  return (
    <div className='my-5 flex items-center justify-around md:hidden '>
      <Hamburger />
      <CompanyInfo />
      <ProfilePic />
    </div>
  )
}
