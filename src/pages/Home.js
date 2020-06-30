import React, { Component } from 'react'
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { WeatherObj } from '../components/WeatherObj';
export class Home extends Component {
    state = { result: [], usedSearch: false }
    _handleResult = (result) => {
        this.setState({ result, usedSearch: true })
    }
    _renderResult() {

        return "name" in this.state.result
            ? <WeatherObj weather={this.state.result} />
            : <p>City not found!</p>
        // : 
    }
    render() {
        return (
            <div>
                <Title>Search Weather</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResult} />
                </div>

                {this.state.usedSearch
                    ? this._renderResult()
                    : <small></small>}
            </div>
        )
    }
}