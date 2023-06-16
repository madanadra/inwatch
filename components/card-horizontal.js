import { useRouter } from 'next/router';

export default function CardHorizontal({id, image, title, desc}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/${id}`)}
        className="flex gap-x-3 cursor-pointer hover:bg-four p-2 animate-opacity">
            <img src={image.replace(/@._V1_.*\_AL_.jpg/gi, '@._V1_UX60_CR0,3,60,90_AL_.jpg')} 
            alt="Poster" loading='eager' className="h-[52px] sm:h-16 aspect-[2/3] rounded bg-three" />
            <div className="grow grid content-start gap-y-1">
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