import { useContext } from 'react';
import { InwatchContext } from '../store/context';

export default function DetailMedia() {
    const {state} = useContext(InwatchContext)

    const Trailer = () => {
        // if (!trailer) {
        //     return (
        //         <div className='grid place-content-center h-full'>
        //             <div className='rounded-full aspect-square w-[42px] sm:w-12 
        //             border border-two border-t-three animate-spin' />
        //         </div>
        //     )
        // } else if (trailer === 'not found' ) {
        //     return (
        //         <h1 className='grid place-content-center h-full text-sm sm:text-base text-two'>Trailer not found</h1>
        //     )
        // } else if (trailer === 'something went wrong') {
        //     return (
        //         <h1 className='grid place-content-center h-full text-sm sm:text-base text-two'>Trailer error</h1>
        //     )
        // }

        return (
            <iframe src={state.main.trailer?.linkEmbed} allowFullScreen 
            loading='lazy' className='w-full h-full' />
        )
    }
    
    return (
        <div className='flex gap-x-0.5 xs:gap-x-1 sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-3 px-4 sm:px-10'>
            <div className='rounded overflow-hidden aspect-[2/3] w-[calc((6%*100/22)-1px)] xs:w-[calc((6%*100/22)-2px)]
            sm:w-[calc((6%*100/22)-3px)] md:w-[calc((6%*100/22)-4px)] lg:w-[calc((6%*100/22)-5px)] 
            xl:w-[calc((6%*100/22)-6px)] bg-three'>
                <img src={state.main.image} 
                alt='Poster' loading='lazy' className='w-full h-full' />
            </div>
            <div className='rounded overflow-hidden aspect-[16/9] w-[calc((16%*100/22)-1px)] xs:w-[calc((16%*100/22)-2px)]
            sm:w-[calc((16%*100/22)-3px)] md:w-[calc((16%*100/22)-4px)] lg:w-[calc((16%*100/22)-5px)] 
            xl:w-[calc((16%*100/22)-6px)] bg-three'>
                <Trailer />
            </div>
        </div>
    )
}