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
            { 
                state.error ? 
                <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
                    Something went wrong
                </h1>
                :
                Array.isArray(state.topMovies) && state.topMovies.length ?
                <>
                    <Header title='top movies' />
                    <Grid items={state.topMovies} />   
                </>
                : 
                <div className="absolute inset-0 grid place-content-center">
                    <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
                </div>
            }
        </Layout>
    )
}