import { useEffect, useContext } from "react"
import Layout from "../components/layout"
import Slider from "../components/slider"
import { InwatchContext } from '../store/context';
import Header from "../components/header";
import Wrap from "../components/wrap";
import Banner from "../components/banner";

export default function Home() {
  const {state, getBoxOffice, getInTheaters, getComingSoon, getPopularMovies, getPopularTvShows, 
  getTopMovies, getTopTvShows, getBoxOfficeAllTime} = useContext(InwatchContext)

  useEffect(() => {
    // getBoxOffice()
    // getInTheaters()
    // getComingSoon()
    // getPopularMovies()
    // getPopularTvShows()
    // getTopMovies()
    // getTopTvShows()
    // getBoxOfficeAllTime()
  }, [])

  return (
    <Layout title='Inwatch - Information about Movies and TV Shows'>
      { 
        state.error ? 
          <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">
            Something went wrong
          </h1>
        :
        Array.isArray(state.boxOffice) && state.boxOffice.length &&
        Array.isArray(state.inTheaters) && state.inTheaters.length &&
        Array.isArray(state.comingSoon) && state.comingSoon.length &&
        Array.isArray(state.popularMovies) && state.popularMovies.length &&
        Array.isArray(state.popularTvShows) && state.popularTvShows.length &&
        Array.isArray(state.topMovies) && state.topMovies.length &&
        Array.isArray(state.topTvShows) && state.topTvShows.length &&
        Array.isArray(state.boxOfficeAllTime) && state.boxOfficeAllTime.length ?
          <>
            <Banner items={state.boxOffice.slice(0, 10)} />
            <Header title='in theaters' to='/in-theaters' /><Slider items={state.inTheaters.slice(0, 15)} />
            <Header title='coming soon' to='/coming-soon' /><Slider items={state.comingSoon.slice(0, 15)} />
            <Header title='popular movies' to='/popular-movies' /><Slider items={state.popularMovies.slice(0, 15)} />
            <Header title='popular tv shows' to='/popular-tv-shows' /><Slider items={state.popularTvShows.slice(0, 15)} />
            <Header title='top movies' to='/top-movies' /><Slider items={state.topMovies.slice(0, 15)} />
            <Header title='top tv shows' to='/top-tv-shows' /><Slider items={state.topTvShows.slice(0, 15)} />
            <Wrap items={state.boxOfficeAllTime.slice(0, 10)} more />   
          </>
        : 
        <div className="absolute inset-0 grid place-content-center">
          <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin' />
        </div>
      }
    </Layout>
  )
}
