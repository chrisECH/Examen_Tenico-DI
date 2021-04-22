import React from 'react'

const WeatherTable = ({dt,id, icon, temperature, description}) => {

    return (
        <tr key={id}>
            <th scope="row" >{dt}</th>
            <td><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Clima"></img></td>
            <td>{temperature}ºC</td>
            <td>{description}</td>
        </tr>
    )
}

export default WeatherTable;