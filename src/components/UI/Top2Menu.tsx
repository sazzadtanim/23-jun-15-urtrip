import { ChevronDoubleLeftIcon, FunnelIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type TTop2Menu = {
  buttonName?: string
  buttonUrl?: string
  title: string
  filterUrl?: string
}

export default function Top2Menu({
  buttonName,
  buttonUrl,
  title,
  filterUrl,
}: TTop2Menu) {
  return (
    <div className='flex select-none justify-between rounded-xl bg-base-100 py-2 text-base shadow-md ring-1 drop-shadow-[10px_35px_35px_rgba(33,125,191,0.1)] md:my-5'>
      {/* title */}
      <div className='prose-h2:bold prose mx-10 my-2'>
        <h2 className='capitalize text-white'>{title}</h2>
      </div>

      <div className='flex items-center justify-center gap-5'>
        {filterUrl && (
          <Link href={filterUrl ?? ''}>
            <FunnelIcon className='h-6 w-6 hover:fill-primary' />
          </Link>
        )}

        <div className='flex items-center justify-center gap-1'>
          {/* Filter icon for complex table */}
          {buttonName && buttonUrl && (
            <Link href={buttonUrl}>
              <button className='btn-primary btn text-base-100'>
                {buttonName === 'Back' && (
                  <ChevronDoubleLeftIcon className='h-6 w-6' />
                )}
                <p className='truncate text-sm capitalize'>{buttonName}</p>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
