import { useRef, useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CardVertical from "./card-vertical";

export default function Slider({items}) {
    const slider = useRef(0)
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('resize', ()=> {   
            setWidth(window.innerWidth);
        });
        setWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        sliding();
    }, [items])

    const scroll = (arrow) => {
        const scrollOffset = 
        width >= 640 && width <= 767 ?
        slider.current.clientWidth - 80 + 12 : 
        width >= 768 && width <= 1023 ?
        slider.current.clientWidth - 80 + 14 : 
        width >= 1024 && width <= 1279 ?
        slider.current.clientWidth - 80 + 16 : 
        width >= 1280 ? slider.current.clientWidth - 80 + 18 : 0

        slider.current.scrollLeft = 
        arrow === 'left' ? slider.current.scrollLeft - scrollOffset : 
        arrow === 'right' ? slider.current.scrollLeft + scrollOffset : 
        slider.current.scrollLeft
    };
    
    const sliding = () => {
        slider.current.scrollLeft > 0 ? setLeft(true) : setLeft(false)
        slider.current.scrollLeft < slider.current.scrollWidth - slider.current.clientWidth ? setRight(true) : setRight(false)
    }
    
    return (
        <div className="relative w-full grid mt-3.5 mb-8">
            <div ref={slider} onScroll={() => sliding()} 
            className='px-4 sm:px-10 grid overflow-x-auto w-full slider grid-flow-col
            gap-x-2 xs:gap-x-2.5 sm:gap-x-3 md:gap-x-3.5 lg:gap-x-4 xl:gap-x-[18px]
            auto-cols-[calc((100%-8px)/2)]
            xs:auto-cols-[calc((100%-20px)/3)] 
            sm:auto-cols-[calc((100%-36px)/4)] 
            md:auto-cols-[calc((100%-56px)/5)] 
            lg:auto-cols-[calc((100%-80px)/6)] 
            xl:auto-cols-[calc((100%-108px)/7)]'>
                {items.map((item, i) => <CardVertical key={i} id={item.id} image={item.image} title={item.title} />)}
            </div>
            <div onClick={() => scroll('left')} className={`${left && 'sm:grid'} hidden absolute 
            top-1/2 translate-y-[-50%] bottom-auto left-0 py-3 px-1.5 bg-five hover:bg-four 
            bg-opacity-30 hover:bg-opacity-30 border border-three cursor-pointer rounded`}>
                <IoChevronBack className="text-3xl sm:text-4xl" />
            </div>
            <div onClick={() => scroll('right')} className={`${right && 'sm:grid'} hidden absolute 
            top-1/2 translate-y-[-50%] bottom-auto right-0 py-3 px-1.5 bg-five hover:bg-four 
            bg-opacity-30 hover:bg-opacity-30 border border-three cursor-pointer rounded`}>
                <IoChevronForward className="text-3xl sm:text-4xl" />
            </div>
        </div>
    )
}