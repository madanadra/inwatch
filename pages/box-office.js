import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"
import MoreLayout from "../components/more-layout";

export default function BoxOffice() {
    const { boxOffice, setBoxOffice, error } = useInwatch()
      
    const boxOfficeExist = Array.isArray(boxOffice) && boxOffice.length > 0 ? true : false
      
    useEffect(() => {
        if (!boxOfficeExist) {
            get({url: 'BoxOffice', err: error}).then((data) => {
              setBoxOffice(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='Box Office - Inwatch'>
            <MoreLayout itemExist={boxOfficeExist ? true : false}>
                <Header title='box office' />
                <Grid items={boxOffice} />  
            </MoreLayout>
        </Layout>
    )
}