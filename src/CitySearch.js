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

        this.props.updateEvents(suggestion);
    }

    render() {
        return (
            <div className="CitySearch w-full md:w-3/6 flex items-center flex-col">
                <label className="block text-lg font-semibold" >Select a city:
                <input
                    type="text"
                    className="city block p-2 rounded-md text-base font-normal"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                </label>
                <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;