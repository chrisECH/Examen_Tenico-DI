import React from 'react';


export const WeatherCard = ({weather}) => {
    return (

        <div className="section section-page">
            <div className="container centrar">
                <div className="card mb-3">
                <h1 className="title-card-container">Clima en {weather.name}, {weather.sys.country}</h1>
                <div className="row no-gutters">
                    <div className="container d-flex justify-content-center">
                        <div className="logo align-content-center mt-5">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} className="card-img-top" alt="Clima"></img>
                        </div>    
                    </div>
                            <div className="card-body">
                                <h5 className="card-title">{Math.round(weather.main.temp)} ºC</h5>
                                <p className="card-text">{weather.weather[0].description}</p>
                                <p className="card-text">Temp min:{Math.round(weather.main.temp_min)} ºC</p>
                                <p className="card-text">Temp max:{Math.round(weather.main.temp_max)} ºC</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
         
    )
}
