import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = process.env.contentfulToken || "";
axios.defaults.headers.post['Content-Type'] = "application/json";

const useAxios = (url:string, data:object, tracking:any = true, defaultState:any = null) => {
    const [response, setResponse] = useState(defaultState);
    const [error, setError] = useState(true);
    const [loading, setloading] = useState(true);
    const fetchData = () => {
        axios
            .post(url, data)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        if(tracking)
            fetchData();
    }, [tracking]);

    return { response, error, loading };
};

export default useAxios;