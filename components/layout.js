import Head from 'next/head'
import Topbar from './topbar'
import Footer from './footer'

export default function Layout({title, children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='flex flex-col bg-seven text-one font-inter w-full min-h-screen'>
                <Topbar />
                <div className='grow'>{children}</div>
                <Footer />
            </main>
        </>
    )
}