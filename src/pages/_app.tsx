import { type AppType } from 'next/app'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import Notification from '~/components/UI/Notification'
import Sidebar from '~/components/UI/Sidebar'
import MobileNav from '~/components/UI/MobileNav'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Notification />
      <div className='flex min-h-screen flex-auto flex-shrink-0 flex-col antialiased '>
        <MobileNav />
        <Sidebar />
        <main className='md:ml-64'>
          <div className='mx-4'>
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  )
}

export default api.withTRPC(MyApp)
