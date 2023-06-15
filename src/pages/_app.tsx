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
      <div className='text-zinc-800 flex min-h-screen flex-auto flex-shrink-0 flex-col bg-neutral-50 antialiased '>
        <MobileNav />
        <Sidebar />
        <main>
          <div className='mx-4'>
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  )
}

export default api.withTRPC(MyApp)
