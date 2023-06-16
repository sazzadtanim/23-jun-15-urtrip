import Image from 'next/image'
import Link from 'next/link'
import { logo } from 'public/assets/png'

export default function CompanyInfo() {
  return (
    <div>
      <Link
        href={'/'}
        className='flex w-full items-center justify-around gap-2'
      >
        <Image
          src={logo}
          alt={''}
          width={40}
          height={40}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
          className='mx-auto rounded-3xl'
        />
        <p className='text-primaryBlue-100 inline text-xs font-semibold'>
          UrTrip Xpert Ltd.
        </p>
      </Link>
    </div>
  )
}
