import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { InwatchContext } from '../store/context';
import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import Grid from "../components/grid";
import DetailSide from '../components/detail-side';
import DetailHeader from '../components/detail-header';
import DetailMedia from '../components/detail-media';
import DetailList from '../components/detail-list';
import { IoOpenOutline } from 'react-icons/io5';

export default function Detail() {
    const {state, dispatch} = useContext(InwatchContext)
    const router = useRouter()
    const {id} = router.query
    const [trailer, setTrailer] = useState('')

    useEffect(() => {
        if (id && (Object.keys(state.main).length === 0 || state.main.id !== id)) {
            getDetail()
            // getTrailer()
        }
    }, [id])

    const getDetail = () => {
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/Title/${process.env.NEXT_PUBLIC_IMDB_API_KEY}/${id}/Trailer,Ratings,Wikipedia`)
        .then((res) => {
            if (res.data.errorMessage) {
                dispatch({type: 'ERROR', error: true})
            } else {
                dispatch({type: 'MAIN', main: res.data})
            }
        })
        .catch(() => {dispatch({type: 'ERROR', error: true})})
    }

    const getTrailer = () => {
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/YouTubeTrailer/${process.env.NEXT_PUBLIC_IMDB_API_KEY}/${id}`)
        .then((res) => {
            if (res.data.errorMessage) {
                setTrailer('not found')
            } else {
                setTrailer(res.data.videoId)
            }
        })
        .catch(() => {setTrailer('something went wrong')})
    }

    return (
        <Layout title={(state.error ? 'Something went wrong' : state.main.title ? state.main.title : '') + ' - Inwatch'}>
            { 
                state.error ? 
                    <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
                        Something went wrong
                    </h1>
                :
                Object.keys(state.main).length !== 0 ?
                    <div className='grid mt-5 gap-y-3'>
                        <DetailHeader />
                        <DetailMedia />
                        <div className='grid sm:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-y-3 gap-x-12 px-4 sm:px-10 mt-1'>
                            <DetailSide />
                            <DetailList />
                        </div>
                        {state.main.wikipedia?.url &&
                            <a href={state.main.wikipedia?.url} target="_blank" rel="noopener noreferrer"
                            className='flex gap-x-1.5 items-center text-xs sm:text-sm text-main w-max px-4 sm:px-10'>
                                <IoOpenOutline />
                                Wikipedia
                            </a>
                        }
                        {state.main.similars.length > 0 &&
                            <Grid items={state.main.similars.slice(0, 15)} /> 
                        }
                    </div>
                : 
                <div className="absolute inset-0 grid place-content-center">
                    <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
                </div>
            }
        </Layout>
    )
}