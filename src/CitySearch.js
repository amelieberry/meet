import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: false,
        infoText: ''
    }

    handleFocus = (event) => {
        const value = event.target.value;
        this.setState({
            showSuggestions: true
        })
        if (!value || value === 'all') {
            this.setState({
                suggestions: this.props.locations
            })
        } else {
            this.handleInputChange(event)
        }
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'City not found, try again',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    }

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
            showSuggestions: false,
            infoText: ''
        });

        this.props.updateLocation(suggestion);
    }

    render() {
        return (
            <div className="CitySearch flex items-center flex-col m-2">
                <label className="block text-lg font-semibold" >Select a City
                    <input
                        id="city-input"
                        type="text"
                        className="city block p-2 rounded-md text-base font-normal w-72 text-dark-navy bg-light-blue focus:outline-none"
                        value={this.state.query}
                        onChange={this.handleInputChange}
                        onFocus={this.handleFocus}
                    />
                </label>
                <ul 
                    className="suggestions h-36 max-h-40 overflow-auto mt-2 w-72 rounded-md text-center bg-light-blue text-navy z-90" 
                    style={this.state.showSuggestions ? {} : { display: 'none' }}
                >
                    <div className="block text-right h-7">
                        <button 
                            className="bg-light-blue dark:bg-white h-6 w-6 rounded-full mt-1 mr-1"
                            onClick={() => { this.setState({ showSuggestions: false })} }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>
                    <InfoAlert className="text-normal" text={this.state.infoText} />
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            className="cursor-pointer"
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))} {console.log(this.state.suggestions)}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b className="cursor-pointer">See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;