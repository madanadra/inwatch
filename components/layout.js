import Head from 'next/head'
import Topbar from './topbar'
import Footer from './footer'
import Up from './up'

export default function Layout({title, children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='bg-seven text-one font-inter w-full'>
                <Up />
                <div className='flex flex-col min-h-screen'>
                    <Topbar />
                    <div className='grow relative pb-32'>{children}</div>
                </div>
                <Footer />
            </main>
        </>
    )
}