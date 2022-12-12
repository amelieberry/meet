import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: false,
        infoText: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({showSuggestions:true});
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'City not found, please try another city',
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
            <div className="CitySearch w-full md:w-3/6 flex items-center flex-col">
                <label className="block text-lg font-semibold" >Select a city:
                <input
                    type="text"
                    className="city block p-2 rounded-md text-base font-normal w-72 mt-2 text-navy"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                </label>
                <InfoAlert text={this.state.infoText} />
                <ul className="suggestions w-72 rounded-md mt-2 text-center" style={this.state.showSuggestions ? {}: { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            className="cursor-pointer"
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b className="cursor-pointer">See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;