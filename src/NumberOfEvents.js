import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        eventsNumber: 32,
        errorMessage: '', 
    };

    handleInputChange = (event) => {
        const value = event.target.value;

        if (value < 1 || value > 32) {
            this.setState({ 
                eventsNumber: value,
                errorMessage: 'Please enter a number between 1 and 32',
            });
        } else {
            this.setState({
                eventsNumber: value,
                errorMessage: '',
            });
        }
        
        this.props.updateEventsNumber(value);
    };

    render() {
        return (
            <div className="NumberOfEvents w-full md:w-3/6 flex flex-col items-center m-8">
                <label className="block text-lg font-semibold">
                    Number of Events
                    <input 
                    className="NumberOfEvents-input block p-2 rounded-md text-base font-normal w-72 mt-2 text-navy"
                    type="number"
                    min={1}
                    max={32}
                    value={this.state.eventsNumber}
                    onChange={this.handleInputChange}
                    ></input>
                </label>
                <p className="block text-center mt-2">{this.state.errorMessage}</p>
            </div>
        )
    }
}

export default NumberOfEvents;