import { useRouter } from 'next/router';

export default function CardHorizontal({id, image, title, desc}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/${id}`)}
        className="flex gap-x-3 overflow-hidden cursor-pointer hover:bg-four p-2">
            <img className="h-[53px] sm:h-[57px] aspect-[2/3] rounded bg-three" src={image} 
            alt="Poster" loading='lazy' />
            <div className="grow grid content-center gap-y-1 font-medium">
                <h1 className="text-sm sm:text-base leading-tight sm:leading-tight line-clamp-2 break-words">
                    {title}
                </h1>
                <h1 className="text-xs sm:text-sm text-two leading-tight sm:leading-tight line-clamp-3 break-words">
                    {desc}
                </h1>
            </div>
        </div>
    )
}