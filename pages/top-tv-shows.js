import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"
import MoreLayout from "../components/more-layout";

export default function TopTvShows() {
    const { topTvShows, setTopTvShows, error } = useInwatch()
      
    const topTvShowsExist = Array.isArray(topTvShows) && topTvShows.length > 0 ? true : false
      
    useEffect(() => {
        if (!topTvShowsExist) {
            get({url: 'Top250TVs', err: error}).then((data) => {
              setTopTvShows(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='Top TV Shows - Inwatch'>
            <MoreLayout itemExist={topTvShowsExist ? true : false}>
                <Header title='top tv shows' />
                <Grid items={topTvShows} />  
            </MoreLayout>
        </Layout>
    )
}