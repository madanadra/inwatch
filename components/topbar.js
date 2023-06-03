import { useEffect, useRef, useState } from "react";
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import axios from "axios";
import CardHorizontal from "./card-horizontal";
import { useRouter } from 'next/router';

export default function Topbar() {
    const router = useRouter()
    const [searchState, setSearchState] = useState(false)
    const searchRef = useRef(null)
    const [searchValue, setSearchValue] = useState('')
    const [searchData, setSearchData] = useState([])
    const [searchLoad, setSearchLoad] = useState(false)
    const [searchNotif, setSearchNotif] = useState('')

    useEffect(() => {
        document.addEventListener('click', function(e){   
            if (e.target !== document.getElementById('searchbox') && searchRef.current){
                setSearchValue(''); 
                searchRef.current.value = ''
            }
        });
    }, []);
    
    useEffect(() => {
        if (searchState) {
            searchRef.current.focus() 
        }
    }, [searchState]);

    useEffect(() => {
        if (!searchValue) {
            setSearchData([]);
            setSearchNotif('');
        } else {
            const timer = setTimeout(() => search(), 500);
            return () => clearTimeout(timer);
        }
    }, [searchValue])

    const search = () => {
        if (searchValue) {
            setSearchLoad(true);
            axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/Search/${process.env.NEXT_PUBLIC_IMDB_API_KEY}/${searchValue}`)
            .then((res) => {
                if (res.data.results.length) {
                    setSearchData(res.data.results.slice(0, 10))
                } else {
                    if (res.data.errorMessage) {
                        setSearchNotif('Something went wrong')
                    } else {
                        setSearchNotif('No results found')
                    }
                }
                setSearchLoad(false);
            })
            .catch(() => {
                setSearchNotif('Something went wrong')
                setSearchLoad(false);
            })
        }
    }

    return (
        <div className="bg-six w-full px-4 py-2.5 sm:px-10 z-40">
            <div className="h-9 sm:h-10 flex items-center justify-between gap-x-5">
                <h1 onClick={() => router.push('/')} className={`${searchState && 'max-[639px]:hidden'} font-medium 
                sm:text-lg text-main tracking-widest cursor-pointer uppercase`}>inwatch</h1>
                <div className={`${!searchState && 'max-[639px]:hidden'} relative w-full max-w-xl`}>
                    <input id="searchbox" type="text" placeholder="Search" 
                    onChange={(e) => setSearchValue(e.target.value)} 
                    ref={searchRef} className="text-two w-full py-1 pl-3 pr-10 bg-transparent outline-none rounded
                    border border-three focus:border-main text-sm sm:text-base" />
                    <div className="pr-3 absolute inset-y-0 right-0 grid items-center pointer-events-none">
                        {searchLoad ? 
                            <div className='rounded-full aspect-square w-3.5 sm:w-4 
                            border border-two border-t-three animate-spin' />
                        :
                            <HiOutlineMagnifyingGlass className="sm:text-lg text-two" />
                        }
                    </div>
                    <div className={`${searchValue && (searchData.length || searchNotif) ? 'grid' : 'hidden'} 
                    absolute inset-x-0 bg-five divide-y divide-three rounded shadow-[0_0_10px_5px_rgba(0,0,0,0.5)]`}>
                        {!searchData.length && searchNotif ?
                            <h1 className="text-xs sm:text-sm font-medium text-two text-center col-span-2 p-2">
                                {searchNotif}
                            </h1> : searchData.map((item, i) => <CardHorizontal key={i} id={item.id} 
                            image={item.image} title={item.title} desc={item.description} />
                        )}
                    </div>
                </div>
                <div className="sm:hidden text-one">
                    {searchState ? <HiOutlineXMark className="text-xl" onClick={() => setSearchState(false)} /> :
                    <HiOutlineMagnifyingGlass className="text-xl" onClick={() => setSearchState(true)} /> 
                    }
                </div>
            </div>
        </div>
    )
}