import { type NextPage } from 'next'
import DynamicHeader from '~/components/Dynamic/DynamicHeader'
import Transaction from '~/components/Transaction'
import Top2Menu from '~/components/UI/Top2Menu'
import { api } from '~/utils/api'

const Home: NextPage = () => {
  const { data: financialAccounts } = api.payment.all.useQuery()

  return (
    <>
      <DynamicHeader title='Urtrip Dashboard' />
      <Top2Menu title='dashboard' />
      <main>
        <h1 className='prose-2xl text-center'>
          This is backend app for UrTrip
        </h1>
        <Transaction
          clientId='sazzadtanim'
          financialAccounts={financialAccounts}
          totalAmount={300}
        />
      </main>
    </>
  )
}

export default Home
