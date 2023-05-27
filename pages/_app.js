import { Inwatch } from '../store/context'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Inwatch>
      <Component {...pageProps} />
    </Inwatch>
  )
}
