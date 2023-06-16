import { useRouter } from 'next/router';

export default function CardVertical({id, image, title}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/${id}`)}
        className='cursor-pointer h-max group'>
            <div className='aspect-[2/3] bg-three rounded overflow-hidden'>
                <img src={image.replace(/@._V1_.*\_AL_.jpg/gi, '@._V1_UX240_CR0,3,240,360_AL_.jpg')} alt="Poster" 
                loading='eager' className="w-full h-full group-hover:brightness-90 duration-75" />
            </div>
            <h1 className="text-xs sm:text-sm my-2 line-clamp-2 break-words">
                {title}
            </h1>
        </div> 
    )
}