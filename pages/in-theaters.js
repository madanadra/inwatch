import { useEffect, useContext } from "react"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid";

export default function InTheaters() {
    const {state, getInTheaters} = useContext(InwatchContext)
      
    useEffect(() => {
        getInTheaters()
    }, [])

    return (
        <Layout title='In Theaters - Inwatch'>
            <Header title='in theaters' />
            <Grid items={state.inTheaters} />
        </Layout>
    )
}