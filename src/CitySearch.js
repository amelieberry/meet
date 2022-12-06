import React, { Component } from "react";

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
        this.setState({
            query: value,
            suggestions,
        });
    }

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
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