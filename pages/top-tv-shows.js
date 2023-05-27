import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid";

export default function TopTvShows() {
    const {state, getTopTvShows} = useContext(InwatchContext)
      
    useEffect(() => {
        getTopTvShows()
    }, [])

    return (
        <Layout title='Top TV Shows - Inwatch'>
            <Header title='top tv shows' />
            <Grid items={state.topTvShows} />
        </Layout>
    )
}