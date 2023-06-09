import { useInwatch } from '../zustand';

export default function DetailHeader() {
    const { detail } = useInwatch()

    return (
        <div className='grid gap-y-1 px-4 sm:px-10'>
            <h1 className='text-3xl sm:text-4xl'>{detail.title}</h1>
            {(detail.tvEpisodeInfo?.seriesTitle || detail.tvEpisodeInfo?.seasonNumber || 
            detail.tvEpisodeInfo?.episodeNumber) &&
                <h1 className='text-xs sm:text-sm text-two font-medium'>
                    <span>{detail.tvEpisodeInfo?.seriesTitle} </span>
                    <span>{detail.tvEpisodeInfo?.seasonNumber && 
                    'Season '+detail.tvEpisodeInfo?.seasonNumber} </span>
                    <span>{detail.tvEpisodeInfo?.episodeNumber && 
                    'Episode '+detail.tvEpisodeInfo?.episodeNumber} </span>
                </h1>
            }
            <div className='flex gap-x-1 items-center text-xs sm:text-sm text-two font-medium'>
                {detail.type && <><h1>{detail.type}</h1><span className='last:hidden'>&middot;</span></>}

                {detail.year && <><h1>{detail.year}{detail.tvSeriesInfo?.yearEnd && 
                '-'+detail.tvSeriesInfo?.yearEnd}</h1><span className='last:hidden'>&middot;</span></>}

                {detail.runtimeStr && <><h1>{detail.runtimeStr}</h1>
                <span className='last:hidden'>&middot;</span></>}
                
                {detail.tvSeriesInfo?.seasons.length > 0 && 
                <><h1>{detail.tvSeriesInfo?.seasons.length} Season{detail.tvSeriesInfo?.seasons.length > 1 && 
                's'}</h1><span className='last:hidden'>&middot;</span></>}
            </div>
        </div>
    )
}