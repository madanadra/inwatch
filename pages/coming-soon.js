import { useEffect } from "react"
import { useInwatch, get } from "../zustand";
import Header from "../components/header";
import Layout from "../components/layout";
import Grid from "../components/grid"
import MoreLayout from "../components/more-layout";

export default function ComingSoon() {
    const { comingSoon, setComingSoon, error } = useInwatch()
      
    const comingSoonExist = Array.isArray(comingSoon) && comingSoon.length > 0 ? true : false
      
    useEffect(() => {
        if (!comingSoonExist) {
            get({url: 'ComingSoon', err: error}).then((data) => {
              setComingSoon(data?.items)
            })
        }
    }, [])

    return (
        <Layout title='Coming Soon - Inwatch'>
            <MoreLayout itemExist={comingSoonExist ? true : false}>
                <Header title='coming soon' />
                <Grid items={comingSoon} />  
            </MoreLayout>
        </Layout>
    )
}