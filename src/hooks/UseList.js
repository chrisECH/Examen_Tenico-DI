import {useState, useEffect} from 'react';

const UseList = (apiList) => {
    const [dataList, setData] = useState(null);
    const [errorList, setError] = useState(null);
    const [loadingList, setLoading] = useState(null);
    const [urlList, setUrlList] = useState(apiList);

    useEffect(() =>{
        if(!urlList) return;
        setLoading(true);
        setData(dataList);
        setError(null);

        fetch(urlList)
        .then((response) =>response.json())
        .then((dataList) =>{
            setLoading(false);
            if(dataList.cod >= 400) {
                setError(dataList.message);
                
                return;
            }
            setData(dataList);
        })
        .catch((errorList) => {
            setLoading(false);
            setError(errorList);
        });
    
    }, [urlList]);

    
    return {dataList, errorList,loadingList, setUrlList};
}

export default UseList;