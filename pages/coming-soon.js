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
            <Header title='coming soon' />
            <Grid items={state.comingSoon} />
        </Layout>
    )
}