import { useInwatch } from "../zustand"
import { IoPlayCircleOutline } from 'react-icons/io5';

export default function DetailMedia() {
    const { detail } = useInwatch()

    const Trailer = () => {
        if (!detail.trailer?.thumbnailUrl) {
            return (
                <h1 className='sm:text-lg text-two absolute inset-0 grid place-content-center'>
                    Trailer {detail.trailer?.errorMessage ? 'error' : 'not found'}
                </h1>
            )
        }

        return (<>
            <img src={detail.trailer?.thumbnailUrl} alt='Trailer'
            loading='lazy' className='w-full h-full brightness-75' />
            <div className='absolute inset-0 grid place-content-center 
            shadow-[0_0_50px_25px_rgba(0,0,0,0.5)_inset] sm:shadow-[0_0_100px_50px_rgba(0,0,0,0.5)_inset'>
                <IoPlayCircleOutline className='text-5xl sm:text-9xl' />          
            </div>
        </>)
    }
    
    return (
        <div className='flex gap-x-1 sm:gap-x-2 px-4 sm:px-10'>
            <div className='rounded overflow-hidden aspect-[2/3] w-[calc((6%*100/22)-2px)]
            sm:w-[calc((6%*100/22)-4px)] bg-three'>
                <img src={detail.image} 
                alt='Poster' loading='lazy' className='w-full h-full' />
            </div>
            <a href={detail.trailer?.link} target="_blank" rel="noopener noreferrer" 
            className='rounded overflow-hidden aspect-[16/9] w-[calc((16%*100/22)-2px)] 
            sm:w-[calc((16%*100/22)-4px)] bg-three relative'>
                <Trailer />
            </a>
        </div>
    )
}