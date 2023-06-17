import { useEffect, useRef, useState } from "react";
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import CardHorizontal from "./card-horizontal";
import { useRouter } from 'next/router';
import { useInwatch, get } from "../zustand";

export default function Topbar() {
    const { error } = useInwatch()
    const router = useRouter()
    const searchRef = useRef(null)
    const [showSearch, setShowSearch] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchData, setSearchData] = useState([])
    const [notFound, setNotFound] = useState(false)
    const searchDataExist = Array.isArray(searchData) && searchData.length > 0

    useEffect(() => {
        document.addEventListener('click', function(e){   
            if (e.target !== document.getElementById('searchbox')){
                setShowResult(false)
            }
        })
    }, [])
    
    useEffect(() => {
        showSearch && searchRef.current.focus()
    }, [showSearch]);

    useEffect(() => {
        setNotFound(false)
        setSearchData([])
        if (searchValue) {
            if (!showResult) {
                setShowResult(true)
            }
            const timer = setTimeout(() => search(), 500);
            return () => clearTimeout(timer);
        } else {
            setShowResult(false)
        }
    }, [searchValue])

    const search = () => {
        if (searchValue) {
            get({url: 'Search', secondUrl: searchValue, err: error}).then((data) => {
                if (data?.results?.length === 0) {
                    setNotFound(true)
                } else {
                    setSearchData(data?.results?.slice(0, 10))
                }
            })
        }
    }

    const Result = () => {
        if (error && !searchDataExist) {
            return (
                <h1 className="text-xs sm:text-sm font-medium text-two text-center p-3">
                    {error}
                </h1>
            )
        }

        if (!error && !searchDataExist && notFound) {
            return (
                <h1 className="text-xs sm:text-sm font-medium text-two text-center p-3">
                    Not found
                </h1>
            )
        }

        if (!error && !searchDataExist && !notFound) {
            return (
                <div className="grid place-content-center p-3">
                    <div className='rounded-full aspect-square w-4 sm:w-5 
                    border border-two border-t-three animate-spin' />
                </div>
            )
        }

        return (
            searchData.map((item, i) => <CardHorizontal key={i} id={item.id} 
            image={item.image} title={item.title} desc={item.description} />)
        )
    }

    return (
        <div className="bg-six w-full px-4 py-2.5 sm:px-10 z-40">
            <div className="h-9 sm:h-10 flex items-center justify-between gap-x-5">
                <h1 onClick={() => router.push('/')} className={`${showSearch && 'max-[639px]:hidden'} font-medium 
                sm:text-lg text-main tracking-widest cursor-pointer uppercase`}>inwatch</h1>
                <div className={`${!showSearch && 'max-[639px]:hidden'} relative w-full max-w-xl`}>
                    <input id="searchbox" type="text" placeholder="Search" 
                    onChange={(e) => setSearchValue(e.target.value)} onFocus={(e) => e.target.select()}
                    ref={searchRef} className="text-two w-full py-1 pl-3 pr-10 bg-transparent outline-none rounded
                    border border-three focus:border-main text-sm sm:text-base" />
                    <div className="pr-3 absolute inset-y-0 right-0 grid items-center pointer-events-none">
                        <HiOutlineMagnifyingGlass className="sm:text-lg text-two" />
                    </div>
                    {showResult &&
                        <div className='grid absolute top-[calc(100%+6px)] inset-x-0 bg-five 
                        divide-y divide-three rounded overflow-hidden shadow-[0_0_10px_5px_rgba(0,0,0,0.5)]'>
                            <Result />
                        </div>
                    }
                </div>
                <div className="sm:hidden text-xl text-one">
                    {showSearch ? <HiOutlineXMark onClick={() => setShowSearch(false)} /> :
                    <HiOutlineMagnifyingGlass onClick={() => setShowSearch(true)} /> 
                    }
                </div>
            </div>
        </div>
    )
}