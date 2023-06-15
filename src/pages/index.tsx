import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import DynamicHeader from '~/components/DynamicHeader'
import { api } from '~/utils/api'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <DynamicHeader title='Urtrip Dashboard' />
      <main >
        <h1 className='text-white'>Hello all, sazzad</h1>
      </main>
    </>
  )
}

export default Home
