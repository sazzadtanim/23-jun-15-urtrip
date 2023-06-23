import { type NextPage } from 'next'
import DynamicHeader from '~/components/Dynamic/DynamicHeader'
import Top2Menu from '~/components/UI/Top2Menu'

const Home: NextPage = () => {
  return (
    <>
      <DynamicHeader title='Urtrip Dashboard' />
      <Top2Menu title='dashboard' />
      <main>
        <h1 className='prose-2xl text-center'>
          This is backend app for UrTrip
        </h1>
      </main>
    </>
  )
}

export default Home
