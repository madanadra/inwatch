import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Wrap from "../components/wrap";

export default function BoxOfficeAllTime() {
    const {state, getBoxOfficeAllTime} = useContext(InwatchContext)
      
    useEffect(() => {
        getBoxOfficeAllTime()
      }, [])

    return (
        <Layout title='Box Office All Time - Inwatch'>
            { 
                state.error ? 
                <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
                    Something went wrong
                </h1>
                :
                Array.isArray(state.boxOfficeAllTime) && state.boxOfficeAllTime.length ?
                <>
                    <Header title='box office all time' />
                    <Wrap items={state.boxOfficeAllTime} />   
                </>
                : 
                <div className="absolute inset-0 grid place-content-center">
                    <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
                </div>
            }
        </Layout>
    )
}