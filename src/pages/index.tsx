import { type NextPage } from 'next'
import DynamicHeader from '~/components/Dynamic/DynamicHeader'

const Home: NextPage = () => {
  return (
    <>
      <DynamicHeader title='Urtrip Dashboard' />
      <main>
        <h1 className='text-white'>Hello all, sazzad</h1>
      </main>
    </>
  )
}

export default Home
