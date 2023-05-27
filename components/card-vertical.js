import { useRouter } from 'next/router';

export default function CardVertical({id, image, title}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/${id}`)}
        className='bg-five cursor-pointer rounded overflow-hidden'>
            <div className='aspect-[2/3] bg-three'>
                <img src={image} alt="Poster" loading='lazy' className="w-full h-full" />
            </div>
            <div className='h-[51px] sm:h-14 py-2 px-3 overflow-hidden grid content-center font-medium'>
                <h1 className="text-sm sm:text-base leading-tight sm:leading-tight line-clamp-2 break-words">
                    {title}
                </h1>
            </div>
        </div> 
    )
}