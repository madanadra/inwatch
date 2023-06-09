import { useInwatch } from "../zustand"

export default function DetailSide() {
    const { detail } = useInwatch()

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
                {detail.contentRating && 
                    <h1 className='text-xs sm:text-sm font-bold pr-3'>{detail.contentRating}</h1>
                }
                {detail.genreList.map((item, i) => 
                    <h1 key={i} className='rounded-full py-1.5 px-3 border border-three text-xs sm:text-sm 
                    cursor-pointer hover:bg-six'>
                        {item.value}
                    </h1>
                )}
            </div>
            <h1 className='text-sm sm:text-base -mt-1'>{detail.plot}</h1>
            <div className='grid gap-y-1'>
                <Rating name='IMDB' item={detail.imDbRating} other={Intl.NumberFormat('en-US', 
                {notation: "compact", maximumFractionDigits: 1}).format(detail.imDbRatingVotes)} />
                <Rating name='Rotten Tomatoes' item={detail.ratings?.rottenTomatoes} />
                <Rating name='Metacritic' item={detail.ratings?.metacritic} />
                <Rating name='TMDB' item={detail.ratings?.theMovieDb} />
                <Rating name='Film Affinity' item={detail.ratings?.filmAffinity} />
            </div>
            <h1 className='text-xs sm:text-sm text-two'>{detail.awards}</h1>
        </div>
    )
}