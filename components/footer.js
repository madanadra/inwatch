import { useRouter } from 'next/router';

export default function Footer() {
    const router = useRouter()
    const menu = ['Box Office', 'In Theaters', 'Coming Soon', 'Popular Movies', 
    'Popular TV Shows', 'Top Movies', 'Top TV Shows', 'Box Office All Time']

    const Menu = ({item}) => {
        return (<>
            <h1 onClick={() => router.push(`/${item.toLocaleLowerCase().split(' ').join('-')}`)}
            className="text-sm sm:text-base hover:underline cursor-pointer">{item}</h1>
            <span className='last:hidden text-two'>&middot;</span>
        </>)
    }

    return (
        <div className="bg-main mt-32 py-7 px-4 sm:px-10 grid gap-y-7">
            <div className="flex items-center flex-wrap gap-x-2 font-medium">
            {menu.map((item, i) => 
                <Menu key={i} item={item} />
            )}
            </div>
            <div className='grid gap-y-1.5 text-xs sm:text-sm text-two'>
                <h1>API from IMDb-API</h1>
                <h1>&copy; {new Date().getFullYear()} Inwatch by Indra</h1>
            </div>
        </div>
    )
}