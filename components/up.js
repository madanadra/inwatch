import { IoChevronUp } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Up() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=> {   
            window.scrollY > 500 ? setShow(true) : setShow(false)
        });
    }, [])

    return (
        <div className={`${!show && 'hidden'} fixed top-7 inset-x-0 z-50 up`}>
            <h1 onClick={() => window.scrollTo(0, 0)} 
            className="flex items-center gap-x-2 text-xs sm:text-sm bg-main rounded-full 
            py-1.5 px-3 mx-auto w-max cursor-pointer shadow-[0_0_10px_5px_rgba(0,0,0,0.5)]">
                <IoChevronUp/> Back to top
            </h1>
        </div>
    )
}