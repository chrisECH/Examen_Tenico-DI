import {useState, useEffect} from 'react';


const UseFetch = (apiUrl) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [url, setUrl] = useState(apiUrl);

    useEffect(() => {
        if(!url) return;
        setLoading(true);
        setData(null);
        setError(null);

        fetch(url)
            .then((response) =>response.json())
            .then((data) =>{
                setLoading(false);
                if(data.cod >= 400){
                    setError(data.message);
                    return;
                }
                setData(data);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
        
    }, [url]);
    console.log(data);
    return {data, error,loading, setUrl};
    
}



export default UseFetch;