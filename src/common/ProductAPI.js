import { useState, useEffect } from 'react';
import axios from "axios"
import {REACT_APP_TMDB_KEY} from "./api"

export default function ProductsAPI() {
    const [products, setProducts] = useState([])
    // const [callback, setCallback] = useState(false)
    const [search, setSearch] = useState('Avengers')
    // const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
    // const [category, setCategory] = useState("")
    // const [sort, setSort] = useState("")

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_TMDB_KEY}&page=1`)
            setProducts(response.data.results)
        }
        getProducts()
    }, [])
    
    useEffect(() => {
        const getSearch = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${search}`)
                setResult(response.data.results)
        }
        getSearch()
    }, [search])

    return {
        products: [products, setProducts],
        search: [search, setSearch],
        result: [result, setResult]
    }
}
