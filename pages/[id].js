import { useEffect, useRouter } from 'next/router';
import Layout from '../components/layout';
import { useState } from 'react';
import axios from "axios";

export default function Detail() {
    const router = useRouter()
    const { id } = router.query
    const [item, setItem] = useState([])

    // useEffect(() => {

    // }, [])

    return (
        <Layout title={item.title + ' - Inwatch'}>
            <>{id}</>
        </Layout>
    )
}