import React from 'react'
import WeatherTable from './WeatherTable';
const WeatherList = ({weathers}) => {
    
    return (
        <div className="section section-page">
            <div className="container centrar shadow weather-page">
                <div className="row">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Hora</th>
                                <th scope="col"></th>
                                <th scope="col">Temperatura</th>
                                <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                                {weathers.map(({dt,dt_txt,main,weather}) => (
                                    <WeatherTable
                                        id={dt.toString()}
                                        dt={dt_txt}
                                        icon={weather[0].icon}
                                        temperature={Math.round(main.temp)}
                                        description={weather[0].description}
                                    />
                                ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       
    )
}

export default WeatherList;