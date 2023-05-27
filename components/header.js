import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRouter } from 'next/router';

export default function Header({title, to}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(to ? '/'+to : '/')} 
        className="flex items-center gap-x-2 mx-4 sm:mx-10 mt-5 text-lg sm:text-xl group cursor-pointer w-max">
            <IoChevronBack className={`${to && 'hidden'} group-hover:text-main`} />
            <h1 className="font-bold uppercase tracking-wider">{title}</h1>
            <IoChevronForward className={`${!to && 'hidden'} group-hover:text-main`} />
        </div>
    )
}