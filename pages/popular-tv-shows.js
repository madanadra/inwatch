import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid";

export default function PopularTvShows() {
    const {state, getPopularTvShows} = useContext(InwatchContext)
      
    useEffect(() => {
        getPopularTvShows()
    }, [])

    return (
        <Layout title='Popular TV Shows - Inwatch'>
            <Header title='popular tv shows ' />
            <Grid items={state.popularTvShows} />
        </Layout>
    )
}