import { useRouter } from 'next/router';

export default function Footer() {
    const router = useRouter()
    const menu = ['Box Office', 'In Theaters', 'Coming Soon', 'Popular Movies', 
    'Popular TV Shows', 'Top Movies', 'Top TV Shows', 'Box Office All Time']

    return (
        <div className="bg-six py-7 px-4 sm:px-10 divide-y divide-three">
            <div className='grid gap-y-px pb-5'>
                <h1 onClick={() => router.push('/')} className='font-medium text-2xl sm:text-3xl text-main 
                tracking-widest cursor-pointer uppercase'>inwatch</h1>
                <h1 className='text-xs sm:text-sm text-two'>
                    Information about Movies and TV Shows.
                </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-5 py-5">
                {menu.map((item, i) => 
                    <h1 key={i} onClick={() => router.push(`/${item.toLocaleLowerCase().split(' ').join('-')}`)}
                    className="text-xs sm:text-sm font-medium hover:underline cursor-pointer w-max 
                    uppercase tracking-wider">{item}</h1>
                )}
            </div>
            <h1 className='text-xs sm:text-sm text-two pt-5'>
                &copy; {new Date().getFullYear()} Inwatch by Indra. All Rights Reserved.
            </h1>
        </div>
    )
}