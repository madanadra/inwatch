import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { useEffect } from 'react';
import Grid from "../components/grid";
import DetailSide from '../components/detail-side';
import DetailHeader from '../components/detail-header';
import DetailMedia from '../components/detail-media';
import DetailList from '../components/detail-list';
import DetailExternal from '../components/detail-external';
import { useInwatch, get } from "../zustand";

export default function Detail() {
    const { detail, setDetail, error } = useInwatch()
    const router = useRouter()
    const {id} = router.query
    const detailExist = typeof detail === 'object' && Object.keys(detail).length > 0 ? true : false
    const title = error && !detailExist ? 'Something went wrong - ' : 
    !error && (!detailExist || (detailExist && detail?.id !== id)) ? '' : 
    detail?.title+' - '

    useEffect(() => {
        if (id && (!detailExist || (detailExist && detail?.id !== id))) {
            get({url: 'Title', secondUrl: id, thirdUrl: 'Trailer,Ratings,Wikipedia', err: error}).then((data) => {
                setDetail(data)
            })
        }
    }, [id])

    const Detail = () => {
        if (error && !detailExist) {
            return (
                <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
                    {error}
                </h1>
            )
        }

        if (!error && (!detailExist || (detailExist && detail?.id !== id))) {
            return (
                <div className="absolute inset-0 grid place-content-center">
                    <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
                </div>
            )
        }

        return (
            <div className='grid mt-5 gap-y-3'>
                <DetailHeader />
                <DetailMedia />
                <div className='grid sm:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-y-3 gap-x-12 px-4 sm:px-10 mt-1'>
                    <DetailSide />
                    <DetailList />
                </div>
                <DetailExternal />
                {detail.similars.length > 0 &&
                    <Grid items={detail.similars.slice(0, 15)} /> 
                }
            </div>
        )
    }

    return (
        <Layout title={title + 'Inwatch'}>
            <Detail />
        </Layout>
    )
}
