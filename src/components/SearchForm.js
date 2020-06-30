import React, { Component } from 'react'
const API_KEY = '1dd92b8f4bf34028a2ca8a23fad6d39c'
export class SearchForm extends Component {
    state = {
        inputCity: ''
    }
    _handleChange = (e) => {
        this.setState({ inputCity: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputCity } = this.state
        inputCity === ''
            ? console.log("error")
            :
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric&lang=es`)
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    this.props.onResults(result)
                }).catch(err => console.log(err))
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter the city" onChange={this._handleChange} maxLength="30" />
                    </div>
                    <div className="control">
                        <button className="button is-primary">
                            Search
                    </button>
                    </div>
                </div>

            </form>
        )
    }
}