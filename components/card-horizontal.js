import { useRouter } from 'next/router';

export default function CardHorizontal({id, image, title, desc}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/${id}`)}
        className="flex gap-x-3 overflow-hidden cursor-pointer hover:bg-four p-2">
            <img className="h-[53px] sm:h-[57px] aspect-[2/3] rounded bg-three" src={image} 
            alt="Poster" loading='lazy' />
            <div className="grow grid content-center gap-y-1">
                <h1 className="text-sm sm:text-base font-medium leading-tight sm:leading-tight">{title}</h1>
                <h1 className="text-xs sm:text-sm font-medium text-two leading-tight sm:leading-tight">{desc}</h1>
            </div>
        </div>
    )
}