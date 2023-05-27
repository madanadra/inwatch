import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid";

export default function PopularMovies() {
    const {state, getPopularMovies} = useContext(InwatchContext)
      
    useEffect(() => {
        getPopularMovies()
    }, [])

    return (
        <Layout title='Popular Movies - Inwatch'>
            <Header title='popular movies' />
            <Grid items={state.popularMovies} />
        </Layout>
    )
}