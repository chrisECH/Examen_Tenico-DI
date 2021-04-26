import React from 'react'
import WeatherTable from './WeatherTable';
const WeatherList = ({weathers}) => {
    
    return (

        <div className="section section-page">
            <div className="container centrar shadow">
                <div className="row">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col-1">Hora</th>
                                <th scope="col-1"></th>
                                <th scope="col-1">Temperatura</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {weathers.map(({dt,dt_txt,main,weather}) => (
                                    <WeatherTable
                                        id={dt.toString()}
                                        dt={dt_txt}
                                        icon={weather[0].icon}
                                        temperature={Math.round(main.temp)}
                                        
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