import Head from 'next/head'
import Navbar from "@/components/Navbar"

export default function comingsoon() {
  return (
    <>
        <Head>
            <title>Coming Soon!</title>
        </Head>

        <Navbar/>

        <div className="wrapper grid place-items-center">
            <div className='flex flex-col justify-items-center items-center py-90'>
                <h1 className='text-3xl font-bold py-2'>Coming Soon</h1>
                <h3>We are working on it</h3>
            </div>
        </div>
    </>
  )
}
