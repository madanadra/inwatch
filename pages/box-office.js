import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"

export default function BoxOfficeAllTime() {
    const {state, getBoxOffice} = useContext(InwatchContext)
      
    useEffect(() => {
        getBoxOffice()
      }, [])

    return (
        <Layout title='Box Office - Inwatch'>
            { 
                state.error ? 
                <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
                    Something went wrong
                </h1>
                :
                Array.isArray(state.boxOffice) && state.boxOffice.length ?
                <>
                    <Header title='box office' />
                    <Grid items={state.boxOffice} />  
                </>
                : 
                <div className="absolute inset-0 grid place-content-center">
                    <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
                </div>
            }
        </Layout>
    )
}