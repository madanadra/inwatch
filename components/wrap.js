import { useRouter } from 'next/router';

export default function Wrap({items, more}) {
    const router = useRouter()

    return (
        <div className={`flex flex-wrap items-center gap-3 ${!more ? 'mt-3.5' : 'mt-10'} mb-8 px-4 sm:px-10`}>
            {items.map((item, i) =>
                <h1 key={i} onClick={() => router.push(`/${item.id}`)} 
                className='rounded font-medium text-sm sm:text-base bg-five hover:bg-four truncate cursor-pointer py-2 px-3'>
                    {item.title}
                </h1>
            )}
            <h1 onClick={() => router.push('/box-office-all-time')}
            className={`${!more && 'hidden'} text-xs sm:text-sm text-main hover:underline cursor-pointer`}>More box office all time</h1>
        </div>
    )
}