import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"
import MoreLayout from "../components/more-layout";

export default function TopMovies() {
    const { topMovies, setTopMovies, error } = useInwatch()
      
    const topMoviesExist = Array.isArray(topMovies) && topMovies.length > 0 ? true : false
      
    useEffect(() => {
        if (!topMoviesExist) {
            get({url: 'Top250Movies', err: error}).then((data) => {
              setTopMovies(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='Top Movies - Inwatch'>
            <MoreLayout itemExist={topMoviesExist ? true : false}>
                <Header title='top movies' />
                <Grid items={topMovies} />  
            </MoreLayout>
        </Layout>
    )
}