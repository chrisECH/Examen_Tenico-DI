import {useState, useEffect} from 'react';

const UseApiLocation = (locationUrl) => {
    const [dataLocation, setData] = useState(null);
    const [errorLocation, setError] = useState(null);
    const [loadingLocation, setLoading] = useState(null);
    const [urlLocation, setUrlLocation] = useState(locationUrl);

    useEffect(() => {
        if(!urlLocation) return;
        setLoading(true);
        setData(null);
        setError(null);

        fetch(urlLocation)
            .then((response) =>response.json())
            .then((dataLocation) =>{
                setLoading(false);
                if(dataLocation.cod >= 400){
                    setError(dataLocation.message);
                    return;
                }
                setData(dataLocation);
            })
            .catch((errorLocation) => {
                setLoading(false);
                setError(errorLocation);
            });
        
    }, [urlLocation]);
    
    return {dataLocation, errorLocation,loadingLocation, setUrlLocation};

}

export default UseApiLocation;