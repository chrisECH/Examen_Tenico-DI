import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { WeatherCard } from './components/ui/WeatherCard';
import CitySearch from './components/ui/CitySearch';
import WeatherList from './components/ui/WeatherList';
import RingLoader from "react-spinners/RingLoader";

import UseList from './hooks/UseList';
import UseFetch from './hooks/UseFetch';

import {REACT_APP_API_WEATHER_URL, REACT_APP_API_FORECAST_KEY, REACT_APP_API_KEY} from './apis/config';

export const WeatherApp = () => {
    const [loadingScreen, setLoadingScreen] = useState(false);
    const {data, error, loading, setUrl} = UseFetch();
    
    const {dataList, errorList, loadingList, setUrlList} = UseList();
    

    useEffect(() => {
        setLoadingScreen(true);

        setTimeout(() =>{
            setLoadingScreen(false);
        },5000);
    }, [])


    const getContent = () => {
        if(error) return <h2>No se encontró la ciudad</h2>;
        if(!data && loading) return <h2>Cargando...</h2>
        if(!data) return null;
        return <WeatherCard weather={data}/>
    }

    const getContentList = () => {
        if(errorList) return ('')
        if(!dataList && loadingList) return <h2>Cargando...</h2>
        if(!dataList) return null;
        return <WeatherList weathers={dataList.list} />
    }

    return (
        <>
        {
            loadingScreen ?
                (
                <div className="container d-flex mt-5">
                    <RingLoader
                        size={200} color={"#042C52"} loadingScreen={loadingScreen}
                    />
                </div>
               )
            :(
            <>
            <div className="container d-flex justify-content-center logo-container">
                <div className="logo align-content-center mt-5">
                    <h1 className="main-title">WeatherApp</h1>
                </div>
            </div>

            
            <div className="container d-flex justify-content-center pt-5 col-6 logo-container">    
                <CitySearch
                    search={(inputCity) => setUrl(`${REACT_APP_API_WEATHER_URL}${inputCity}&appid=${REACT_APP_API_KEY}&lang=es&units=Metric`)}
                    forecast={(inputCity) => setUrlList(`${REACT_APP_API_FORECAST_KEY}${inputCity}&cnt=5&appid=${REACT_APP_API_KEY}&lang=es&units=Metric`)}
                />
            </div>

                <div className="container d-flex justify-content-center">
                    <div className="logo align-content-center mt-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                {getContent()} 
                            </div>
                        </div>
                    </div>
                </div>
                
                {getContentList()}
                       
            </>
            
            )
        }
        </>
)
}
