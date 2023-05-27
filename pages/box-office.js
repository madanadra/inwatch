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
            <Header title='box office' />
            <Grid items={state.boxOffice} />
        </Layout>
    )
}