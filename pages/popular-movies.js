import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"
import MoreLayout from "../components/more-layout";

export default function PopularMovies() {
    const { popularMovies, setPopularMovies, error } = useInwatch()
      
    const popularMoviesExist = Array.isArray(popularMovies) && popularMovies.length > 0 ? true : false
      
    useEffect(() => {
        if (!popularMoviesExist) {
            get({url: 'MostPopularMovies', err: error}).then((data) => {
              setPopularMovies(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='Popular Movies - Inwatch'>
            <MoreLayout itemExist={popularMoviesExist ? true : false}>
                <Header title='popular movies' />
                <Grid items={popularMovies} />  
            </MoreLayout>
        </Layout>
    )
}