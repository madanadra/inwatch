import { useEffect } from "react"
import Layout from "../components/layout"
import Slider from "../components/slider"
import Header from "../components/header";
import Wrap from "../components/wrap";
import Banner from "../components/banner";
import { useInwatch, get } from "../zustand";

export default function Home() {
  const { boxOffice, inTheaters, comingSoon, popularMovies, popularTvShows, topMovies, topTvShows, boxOfficeAllTime, 
  error, setBoxOffice, setInTheaters, setComingSoon, setPopularMovies, setPopularTvShows, setTopMovies, 
  setTopTvShows, setBoxOfficeAllTime } = useInwatch()
  const boxOfficeExist = Array.isArray(boxOffice) && boxOffice.length > 0 ? true : false
  const inTheatersExist = Array.isArray(inTheaters) && inTheaters.length > 0 ? true : false
  const comingSoonExist = Array.isArray(comingSoon) && comingSoon.length > 0 ? true : false
  const popularMoviesExist = Array.isArray(popularMovies) && popularMovies.length > 0 ? true : false
  const popularTvShowsExist = Array.isArray(popularTvShows) && popularTvShows.length > 0 ? true : false
  const topMoviesExist = Array.isArray(topMovies) && topMovies.length > 0 ? true : false
  const topTvShowsExist = Array.isArray(topTvShows) && topTvShows.length > 0 ? true : false
  const boxOfficeAllTimeExist = Array.isArray(boxOfficeAllTime) && boxOfficeAllTime.length > 0 ? true : false

  useEffect(() => {
    if (!boxOfficeExist) {
      get({url: 'BoxOffice', err: error}).then((data) => {
        setBoxOffice(data?.items)
      })
    }
    if (!inTheatersExist) {
      get({url: 'InTheaters', err: error}).then((data) => {
        setInTheaters(data?.items)
      })
    }
    if (!comingSoonExist) {
      get({url: 'ComingSoon', err: error}).then((data) => {
        setComingSoon(data?.items)
      })
    }
    if (!popularMoviesExist) {
      get({url: 'MostPopularMovies', err: error}).then((data) => {
        setPopularMovies(data?.items)
      })
    }
    if (!popularTvShowsExist) {
      get({url: 'MostPopularTVs', err: error}).then((data) => {
        setPopularTvShows(data?.items)
      })
    }
    if (!topMoviesExist) {
      get({url: 'Top250Movies', err: error}).then((data) => {
        setTopMovies(data?.items)
      })
    }
    if (!topTvShowsExist) {
      get({url: 'Top250TVs', err: error}).then((data) => {
        setTopTvShows(data?.items)
      })
    }
    if (!boxOfficeAllTimeExist) {
      get({url: 'BoxOfficeAllTime', err: error}).then((data) => {
        setBoxOfficeAllTime(data?.items)
      })
    }
  }, [])

  const Index = () => {
    if (error && !boxOfficeExist && !inTheatersExist && !comingSoonExist && !popularMoviesExist && 
    !popularTvShowsExist && !topMoviesExist && !topTvShowsExist && !boxOfficeAllTimeExist) {
      return (
        <h1 className="absolute inset-0 grid place-content-center text-sm sm:text-base">{error}</h1>
      )
    }

    if (!error && !boxOfficeExist && !inTheatersExist && !comingSoonExist && !popularMoviesExist && 
    !popularTvShowsExist && !topMoviesExist && !topTvShowsExist && !boxOfficeAllTimeExist) {
      return (
        <div className="absolute inset-0 grid place-content-center">
          <div className='rounded-full aspect-square w-[42px] sm:w-12 
          border border-two border-t-three animate-spin' />
        </div>
      )
    }

    return (<>
      {boxOfficeExist && <Banner items={boxOffice.slice(0, 10)} />}
      {inTheatersExist && <>
        <Header title='in theaters' to='/in-theaters' />
        <Slider items={inTheaters.slice(0, 15)} />
      </>}
      {comingSoonExist && <>
        <Header title='coming soon' to='/coming-soon' />
        <Slider items={comingSoon.slice(0, 15)} />
      </>}
      {popularMoviesExist && <>
        <Header title='popular movies' to='/popular-movies' />
        <Slider items={popularMovies.slice(0, 15)} />
      </>}
      {popularTvShowsExist && <>
        <Header title='popular tv shows' to='/popular-tv-shows' />
        <Slider items={popularTvShows.slice(0, 15)} />
      </>}
      {topMoviesExist && <>
        <Header title='top movies' to='/top-movies' />
        <Slider items={topMovies.slice(0, 15)} />
      </>}
      {topTvShowsExist && <>
        <Header title='top tv shows' to='/top-tv-shows' />
        <Slider items={topTvShows.slice(0, 15)} />
      </>}
      {boxOfficeAllTimeExist && <Wrap items={boxOfficeAllTime.slice(0, 10)} more />}
      {!error && (!boxOfficeExist || !inTheatersExist || !comingSoonExist || !popularMoviesExist || 
      !popularTvShowsExist || !topMoviesExist || !topTvShowsExist || !boxOfficeAllTimeExist) &&
        <div className='rounded-full aspect-square w-[42px] sm:w-12 border border-two border-t-three animate-spin
        my-5 mx-auto' />
      }
    </>)
  }

  return (
    <Layout title='Inwatch - Information about Movies and TV Shows'>
      <Index />
    </Layout>
  )
}
