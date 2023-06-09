import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"
import MoreLayout from "../components/more-layout";

export default function PopularTvShows() {
    const { popularTvShows, setPopularTvShows, error } = useInwatch()
      
    const popularTvShowsExist = Array.isArray(popularTvShows) && popularTvShows.length > 0 ? true : false
      
    useEffect(() => {
        if (!popularTvShowsExist) {
            get({url: 'MostPopularTVs', err: error}).then((data) => {
              setPopularTvShows(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='Popular TV Shows - Inwatch'>
            <MoreLayout itemExist={popularTvShowsExist ? true : false}>
                <Header title='popular tv shows' />
                <Grid items={popularTvShows} />  
            </MoreLayout>
        </Layout>
    )
}