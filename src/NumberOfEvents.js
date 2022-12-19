import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        eventsNumber: 32,
        errorMessage: '', 
    };

    handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        const inputElement = document.getElementById('number-input');

        if (value < 1 || !value || value > 250) {
            this.setState({ 
                eventsNumber: value,
                errorMessage: 'Please enter a number between 1 and 250'
            });
            inputElement.classList.add('focus:outline-none', 'focus:outline-red');          
        } else {
            if (inputElement.classList.contains('focus:outline-none', 'focus:outline-red')) {
                inputElement.classList.remove('focus:outline-none', 'focus:outline-red')
            }
            this.setState({
                eventsNumber: value,
                errorMessage: '',
            });
        }
        
        this.props.updateEventsNumber(value);
    };

    render() {
        return (
            <div className="NumberOfEvents w-full md:w-3/6 flex flex-col items-center m-8 h-24">
                <label className="block text-lg font-semibold mb-2">
                    Number of Events
                    <input
                    id="number-input" 
                    className="NumberOfEvents-input block p-2 rounded-md text-base font-normal w-72 mt-2  text-dark-navy bg-white/80 dark:bg-light-blue/80"
                    type="number"
                    min={1}
                    max={250}
                    value={this.state.eventsNumber}
                    onChange={this.handleInputChange}
                    ></input>
                </label>
                <ErrorAlert text={this.state.errorMessage} />
            </div>
        )
    }
}

export default NumberOfEvents;