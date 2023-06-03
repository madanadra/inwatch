import { useContext } from 'react';
import { InwatchContext } from '../store/context';

export default function DetailHeader() {
    const {state} = useContext(InwatchContext)

    const Sub = ({item, optional}) => {
        return (item && <>
            <h1 className='text-xs sm:text-sm text-two font-medium'>{item}{optional && '-'+state.main.tvSeriesInfo?.yearEnd}</h1>
            <span className='last:hidden'>&middot;</span>
        </>)
    }

    return (
        <div className='grid gap-y-1 px-4 sm:px-10'>
            <h1 className='text-3xl sm:text-4xl'>{state.main.title}</h1>
            {(state.main.tvEpisodeInfo?.seriesTitle || state.main.tvEpisodeInfo?.seasonNumber || 
            state.main.tvEpisodeInfo?.episodeNumber) &&
                <h1 className='text-xs sm:text-sm text-two font-medium'>
                    <span>{state.main.tvEpisodeInfo?.seriesTitle} </span>
                    <span>{state.main.tvEpisodeInfo?.seasonNumber && 
                    'Season '+state.main.tvEpisodeInfo?.seasonNumber} </span>
                    <span>{state.main.tvEpisodeInfo?.episodeNumber && 
                    'Episode '+state.main.tvEpisodeInfo?.episodeNumber} </span>
                </h1>
            }
            <div className='flex gap-x-1 items-center text-xs sm:text-sm text-two font-medium'>
                {state.main.type && <><h1>{state.main.type}</h1><span className='last:hidden'>&middot;</span></>}

                {state.main.year && <><h1>{state.main.year}{state.main.tvSeriesInfo?.yearEnd && 
                '-'+state.main.tvSeriesInfo?.yearEnd}</h1><span className='last:hidden'>&middot;</span></>}

                {state.main.runtimeStr && <><h1>{state.main.runtimeStr}</h1>
                <span className='last:hidden'>&middot;</span></>}
                
                {state.main.tvSeriesInfo?.seasons.length > 0 && 
                <><h1>{state.main.tvSeriesInfo?.seasons.length} Season{state.main.tvSeriesInfo?.seasons.length > 1 && 
                's'}</h1><span className='last:hidden'>&middot;</span></>}
            </div>
        </div>
    )
}