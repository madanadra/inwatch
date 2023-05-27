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
            <Header title='box office all time' />
            <Wrap items={state.boxOfficeAllTime} />
        </Layout>
    )
}