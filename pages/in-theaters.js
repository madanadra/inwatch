import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"
import MoreLayout from "../components/more-layout";

export default function InTheaters() {
    const { inTheaters, setInTheaters, error } = useInwatch()
      
    const inTheatersExist = Array.isArray(inTheaters) && inTheaters.length > 0 ? true : false
      
    useEffect(() => {
        if (!inTheatersExist) {
            get({url: 'InTheaters', err: error}).then((data) => {
              setInTheaters(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='In Theaters - Inwatch'>
            <MoreLayout itemExist={inTheatersExist ? true : false}>
                <Header title='in theaters' />
                <Grid items={inTheaters} />  
            </MoreLayout>
        </Layout>
    )
}