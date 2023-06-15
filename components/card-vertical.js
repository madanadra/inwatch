import { useRouter } from 'next/router';

export default function CardVertical({id, image, title}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/${id}`)}
        className='bg-five cursor-pointer rounded overflow-hidden hover:shadow-[0_0_6px_3px_rgba(0,0,0,0.5)] 
        duration-75 group'>
            <div className='aspect-[2/3] bg-three'>
                <img src={image.replace(/@._V1_.*\_AL_.jpg/gi, '@._V1_UX200_CR0,3,200,300_AL_.jpg')} alt="Poster" 
                loading='eager' className="w-full h-full group-hover:brightness-90 duration-75" />
            </div>
            <div className='h-12 sm:h-14 py-2 px-3 overflow-hidden grid content-center'>
                <h1 className="text-xs sm:text-sm line-clamp-2 break-words">
                    {title}
                </h1>
            </div>
        </div> 
    )
}