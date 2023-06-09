import { useRouter } from 'next/router';

export default function CardHorizontal({id, image, title, desc}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/${id}`)}
        className="flex items-center gap-x-3 cursor-pointer hover:bg-four p-2 animate-opacity">
            <img className="h-[52px] sm:h-16 aspect-[2/3] rounded bg-three" src={image} 
            alt="Poster" loading='lazy' />
            <div className="grow grid gap-y-1">
                <h1 className="text-xs sm:text-sm leading-tight sm:leading-tight line-clamp-2 break-words">
                    {title}
                </h1>
                <h1 className="text-xs sm:text-sm text-two leading-tight sm:leading-tight line-clamp-3 break-words">
                    {desc}
                </h1>
            </div>
        </div>
    )
}