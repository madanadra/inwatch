import { IoOpenOutline } from 'react-icons/io5';
import { useInwatch } from '../zustand';

export default function DetailExternal() {
    const { detail } = useInwatch()

    const Link = ({item, url, name}) => {
        return (item &&
            <a href={url} target="_blank" rel="noopener noreferrer"
            className='flex gap-x-1.5 items-center w-max'>
                <IoOpenOutline />
                {name}
            </a>
        )
    }
    return (
        <div className='flex gap-x-5 text-xs sm:text-sm text-main px-4 sm:px-10 mt-2'>
            <Link item={detail.wikipedia?.url} url={detail.wikipedia?.url} name='Wikipedia' />
            <Link item={detail.id} url={`https://www.imdb.com/title/${detail.id}`} name='IMDb' />
        </div>
    )
}