import Head from 'next/head'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar></Sidebar>
      
    </div>
  )
}
