import { useContext } from 'react';
import { InwatchContext } from '../store/context';

export default function DetailSide() {
    const {state} = useContext(InwatchContext)

    const Rating = ({name, item, other}) => {
        return (item &&
            <h1 className='flex gap-x-1.5 items-center text-xs sm:text-sm text-two'>{name} 
                <span className='text-one font-medium'>
                    {item}{other && ' | '+other}
                </span>
            </h1>
        )
    }

    return (
        <div className='grid content-start gap-y-3 order-first sm:order-last'>
            <div className='flex items-center gap-1.5 flex-wrap'>
                {state.main.contentRating && 
                    <h1 className='text-xs sm:text-sm font-bold pr-3'>{state.main.contentRating}</h1>
                }
                {state.main.genreList.map((item, i) => 
                    <h1 key={i} className='rounded-full py-1.5 px-3 border border-three text-xs sm:text-sm 
                    cursor-pointer hover:bg-six'>
                        {item.value}
                    </h1>
                )}
            </div>
            <h1 className='text-sm sm:text-base -mt-1'>{state.main.plot}</h1>
            <div className='grid gap-y-1'>
                <Rating name='IMDB' item={state.main.imDbRating} other={Intl.NumberFormat('en-US', 
                {notation: "compact", maximumFractionDigits: 1}).format(state.main.imDbRatingVotes)} />
                <Rating name='Rotten Tomatoes' item={state.main.ratings?.rottenTomatoes} />
                <Rating name='Metacritic' item={state.main.ratings?.metacritic} />
                <Rating name='TMDB' item={state.main.ratings?.theMovieDb} />
                <Rating name='Film Affinity' item={state.main.ratings?.filmAffinity} />
            </div>
            <h1 className='text-xs sm:text-sm text-two'>{state.main.awards}</h1>
        </div>
    )
}