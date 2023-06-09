import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Wrap from "../components/wrap";
import MoreLayout from "../components/more-layout";

export default function BoxOfficeAllTime() {
    const { boxOfficeAllTime, setBoxOffice, error } = useInwatch()
      
    const boxOfficeAllTimeExist = Array.isArray(boxOfficeAllTime) && boxOfficeAllTime.length > 0 ? true : false
      
    useEffect(() => {
        if (!boxOfficeAllTimeExist) {
            get({url: 'BoxOfficeAllTime', err: error}).then((data) => {
              setBoxOffice(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='Box Office All Time - Inwatch'>
            <MoreLayout itemExist={boxOfficeAllTimeExist ? true : false}>
                <Header title='box office all time' />
                <Wrap items={boxOfficeAllTime} />  
            </MoreLayout>
        </Layout>
    )
}