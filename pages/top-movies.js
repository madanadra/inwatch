import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid";

export default function TopMovies() {
    const {state, getTopMovies} = useContext(InwatchContext)
      
    useEffect(() => {
        getTopMovies()
    }, [])

    return (
        <Layout title='Top Movies - Inwatch'>
            <Header title='top movies' />
            <Grid items={state.topMovies} />
        </Layout>
    )
}