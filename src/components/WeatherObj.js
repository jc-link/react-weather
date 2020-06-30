import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Weather } from './weather'
export class WeatherObj extends Component {
    static propTypes = {
        weather: PropTypes.object
    }

    render() {

        const { weather } = this.props
        return (
            <Weather
                name={weather.name}
                weather={weather.weather[0].main}
                temp={weather.main.temp}
                feel={weather.main.feels_like}
                humidity={weather.main.humidity}
                iconid={weather.weather[0].icon}
                windSpeed={weather.wind.speed}
            />
        )

    }
}