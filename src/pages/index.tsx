import { type NextPage } from 'next'
import DynamicHeader from '~/components/Dynamic/DynamicHeader'
import Top2Menu from '~/components/UI/Top2Menu'
import InvoicePdf from '~/components/invoicePDF'

const Home: NextPage = () => {
  return (
    <>
      <DynamicHeader title='Urtrip Dashboard' />
      <Top2Menu title='dashboard' />
      <main>
        <InvoicePdf />
      </main>
    </>
  )
}

export default Home
