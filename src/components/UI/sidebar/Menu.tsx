import Link from 'next/link'
import { useRouter } from 'next/router'
import { SideBarItem } from 'offlineData/sidebarList'
import {
  type SVGProps,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react'

export interface Menu {
  title: string
  isActive?: boolean
  url: string
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & RefAttributes<SVGSVGElement>
  >
  submenu?: SideBarItem[]
}

export default function SubMenu(props: Menu) {
  const router = useRouter()
  return (
    <>
      {props.url && (
        <Link
          data-cy='single-li'
          href={props.url}
          className={`font-poppins text-primaryBlue-100 hover:text-primaryBlue-100 flex w-full items-center justify-between rounded-lg px-2 
          py-3 text-sm antialiased hover:bg-primary-content ${
            router.asPath === props.url
              ? 'text-white/80  bg-primary-focus'
              : 'null'
          }`}
        >
          <div className='flex items-center justify-center gap-2'>
            <props.Icon className='h-6 w-6' />
            <p className='hidden capitalize sm:flex'>{props.title}</p>
          </div>
        </Link>
      )}
    </>
  )
}
