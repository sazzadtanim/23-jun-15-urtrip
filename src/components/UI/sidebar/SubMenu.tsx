import {
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { type Menu } from './Menu'

// import useSideBar from 'zustandStores/useSidebar'

export default function SubMenu(props: Menu) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className={`grid w-full rounded-xl`}>
      <button
        className='font-poppins text-primaryBlue-100 hover:text-primaryBlue-100 flex w-full items-center justify-between rounded-xl 
        px-2 py-3 text-sm antialiased hover:bg-primary-content'
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.title && (
          <div className='flex gap-2'>
            <props.Icon className='h-6 w-6' />
            {router.asPath.includes(props.title.toLowerCase()) ? (
              <span className={`flex capitalize text-primary-focus`}>
                {props.title}
              </span>
            ) : (
              <span className={`flex capitalize`}>{props.title}</span>
            )}
          </div>
        )}
        {isOpen ? (
          <ChevronUpIcon className='stroke-slate-950 h-4 w-4' />
        ) : (
          <ChevronDownIcon className='stroke-slate-950 h-4 w-4' />
        )}
      </button>

      <ul className={` space-y-4 py-2 ${isOpen ? 'grid' : 'hidden'}`}>
        {props.submenu &&
          props.submenu.map(
            item =>
              item.url && (
                <Link
                  href={item.url}
                  key={item.title}
                  className={`font-poppins text-primaryBlue-100 hover:bg-primaryRed-100/10 hover:text-primaryBlue-100 flex w-full
             items-center justify-between rounded-lg px-2 
             py-3 text-sm antialiased ${
               router.asPath === item.url
                 ? 'text-primaryWhite-100 bg-primary-focus'
                 : 'null'
             }`}
                >
                  <div className='ml-2 flex items-center justify-center gap-4'>
                    <ArrowRightCircleIcon className='h-2 w-2' />
                    <p className='hidden capitalize sm:flex'>{item.title}</p>
                  </div>
                </Link>
              )
          )}
      </ul>
    </li>
  )
}
