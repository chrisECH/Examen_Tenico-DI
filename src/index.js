import React from 'react';
import ReactDOM from 'react-dom';

import { WeatherApp } from './WeatherApp';
//import { WeatherCard } from './components/ui/WeatherCard';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <WeatherApp/>,
    document.getElementById('root')
    
);