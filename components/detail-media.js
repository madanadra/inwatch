import { useInwatch } from "../zustand"
import { TbPlayerPlayFilled} from 'react-icons/tb';

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
            <img src={detail.trailer?.thumbnailUrl.replace(/@._V1_.*\_AL_.jpg/gi, '@._V1_UX800_CR0,3,800,450_AL_.jpg')} 
            alt='Trailer' loading='eager' className='w-full h-full' />
            <div className='absolute inset-0 grid place-content-center'>
                <div className="rounded-full bg-five bg-opacity-40 p-3 sm:p-6">
                    <TbPlayerPlayFilled className='text-3xl sm:text-6xl' />
                </div>
            </div>
        </>)
    }
    
    return (
        <div className='flex gap-x-1 sm:gap-x-2 px-4 sm:px-10'>
            <div className='rounded overflow-hidden aspect-[2/3] w-[calc((6%*100/22)-2px)]
            sm:w-[calc((6%*100/22)-4px)] bg-three'>
                <img src={detail.image.replace(/@._V1_.*\_AL_.jpg/gi, '@._V1_UX300_CR0,3,300,450_AL_.jpg')} 
                loading='eager' alt='Poster' className='w-full h-full' />
            </div>
            <a href={detail.trailer?.link} target="_blank" rel="noopener noreferrer" 
            className='rounded overflow-hidden aspect-[16/9] w-[calc((16%*100/22)-2px)] 
            sm:w-[calc((16%*100/22)-4px)] bg-three relative'>
                <Trailer />
            </a>
        </div>
    )
}