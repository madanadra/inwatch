import { create } from "zustand";
import axios from "axios";

export const useInwatch = create((set) => ({
  detail: {},
  boxOffice: [],
  inTheaters: [],
  comingSoon: [],
  popularMovies: [],
  popularTvShows: [],
  topMovies: [],
  topTvShows: [],
  boxOfficeAllTime: [],
  error: false,
  setDetail: (data) => set({ detail: data }),
  setBoxOffice: (data) => set({ boxOffice: data }),
  setInTheaters: (data) => set({ inTheaters: data }),
  setComingSoon: (data) => set({ comingSoon: data }),
  setPopularMovies: (data) => set({ popularMovies: data }),
  setPopularTvShows: (data) => set({ popularTvShows: data }),
  setTopMovies: (data) => set({ topMovies: data }),
  setTopTvShows: (data) => set({ topTvShows: data }),
  setBoxOfficeAllTime: (data) => set({ boxOfficeAllTime: data }),
  setError: (data) => set({ error: data }),
}))

export const get = async (props) => {
  const base = process.env.NEXT_PUBLIC_IMDB_BASE_URL
  const key = '/'+process.env.NEXT_PUBLIC_IMDB_API_KEY
  const url = props.url ? '/'+props.url : []
  const secondUrl = props.secondUrl ? '/'+props.secondUrl : []
  const thirdUrl = props.thirdUrl ? '/'+props.thirdUrl : []

  if(!props.err) {
    try {
        const res = await axios.get(base+url+key+secondUrl+thirdUrl)
        if (res.data.errorMessage) {
            throw new Error(res.data.errorMessage)
            
        } else {
            return res.data
        }
    } catch(err) {
        useInwatch.setState({ error: err.message })
    }
  }
}