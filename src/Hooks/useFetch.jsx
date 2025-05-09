import React, { useState } from "react";
import axios from "axios";

const API = "https://api.spoonacular.com/recipes"
const API_KEY = import.meta.env.VITE_API_URL;

const useFetch = () => {
    const [data, setData] = useState([]);
    const [dataDetail, setDataDetail] = useState({})

    const get = async (query) => {
        const res = await axios.get(`${API}/complexSearch?query=${query}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${API_KEY}`,
            },
        });
        setData(res.data.results);
    }

    const detail = async (id) => {
        const res = await axios.get(`${API}/${id}/information`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${API_KEY}`,
            },
        });
        setDataDetail(res.data);
    }

    return {get, data, detail, dataDetail}
}

export default useFetch