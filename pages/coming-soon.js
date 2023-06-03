import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid";

export default function ComingSoon() {
    const {state, getComingSoon} = useContext(InwatchContext)
      
    useEffect(() => {
        getComingSoon()
    }, [])

    return (
        <Layout title='Coming Soon - Inwatch'>
            { 
                state.error ? 
                <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
                    Something went wrong
                </h1>
                :
                Array.isArray(state.comingSoon) && state.comingSoon.length ?
                <>
                    <Header title='coming soon' />
                    <Grid items={state.comingSoon} />  
                </>
                : 
                <div className="absolute inset-0 grid place-content-center">
                    <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
                </div>
            }
        </Layout>
    )
}