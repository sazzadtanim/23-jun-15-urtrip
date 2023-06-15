import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { profilepic } from 'public/assets/png'
import CompanyInfo from './sidebar/CompanyInfo'

function Hamburger() {
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
        <li>
          <Link href={'/'} onClick={() => setIsOpen(prev => !prev)}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href={'/client/clients'}
            onClick={() => setIsOpen(prev => !prev)}
          >
            Client
          </Link>
        </li>
        <li>
          <Link href={'/sales/sales'} onClick={() => setIsOpen(prev => !prev)}>
            Sales
          </Link>
        </li>

        <li>
          <Link
            href={'/quotation/quotations'}
            onClick={() => setIsOpen(prev => !prev)}
          >
            Quotation
          </Link>
        </li>
        {/* Purchase */}
        <li>
          <div className='justify-between'>
            Purchase
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
            </svg>
          </div>
          <ul className='bg-white p-2'>
            <li>
              <Link
                href={'/purchase/item/items'}
                onClick={() => setIsOpen(prev => !prev)}
              >
                Items
              </Link>
            </li>
            <li>
              <Link
                href={'/purchase/invoice/invoices'}
                onClick={() => setIsOpen(prev => !prev)}
              >
                Invoice
              </Link>
            </li>
            <li>
              <Link
                href={'/purchase/supplier/suppliers'}
                onClick={() => setIsOpen(prev => !prev)}
              >
                Supplier
              </Link>
            </li>
          </ul>
        </li>
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

function ProfilePic() {
  return (
    <>
      <div className=''>
        <Image
          src={profilepic}
          alt={''}
          width={40}
          height={40}
          className='rounded-full'
        />
      </div>
    </>
  )
}
