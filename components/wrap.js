import { useRouter } from 'next/router';

export default function Wrap({items, more}) {
    const router = useRouter()

    return (
        <div className={`flex flex-wrap items-center gap-3 ${!more ? 'mt-3.5' : 'mt-10'} mb-8 px-4 sm:px-10
        text-xs sm:text-sm`}>
            {items.map((item, i) =>
                <h1 key={i} onClick={() => router.push(`/${item.id}`)} 
                className='rounded-full border border-three hover:bg-six truncate cursor-pointer py-1.5 px-3'>
                    {item.title}
                </h1>
            )}
            <h1 onClick={() => router.push('/box-office-all-time')}
            className={`${!more && 'hidden'} text-main
            rounded-full border border-three hover:bg-six truncate cursor-pointer py-1.5 px-3`}>
                More box office all time
            </h1>
        </div>
    )
}