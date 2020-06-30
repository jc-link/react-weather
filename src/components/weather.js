import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Weather extends Component {
    static propTypes = {
        name: PropTypes.string,
        weather: PropTypes.string,
        temp: PropTypes.number,
        feel: PropTypes.number,
        humidity: PropTypes.number,
        iconid: PropTypes.string,
        windSpeed: PropTypes.number
    }

    render() {
        const { name, weather, temp, feel, humidity, iconid, windSpeed } = this.props
        const iconurl = `http://openweathermap.org/img/wn/${iconid}@2x.png`
        return (
            <div className="SearchForm-wrapperTwo">

                <div className="card">
                    <figure className="image is-64x64 imgContainer">
                        <img src={iconurl} alt="" />
                    </figure>


                    <div className="card-content">
                        <div className="content">




                            <p>The Weather in {name} is {weather}</p>
                            <p>Temperature {temp}° C</p>
                            <p>Feels like {feel}° C</p>
                            <p>Humidity {humidity}%</p>
                            <p>Wind speed {windSpeed} m/s</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}