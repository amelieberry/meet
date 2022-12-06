import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        eventsNumber: 32,
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ 
            eventsNumber: value 
        });
        this.props.updateEventsNumber(value);
    };

    render() {
        return (
            <div className="NumberOfEvents w-full md:w-3/6 flex justify-center m-8">
                <label className="block text-lg font-semibold">
                    Number of Events
                    <input 
                    className="NumberOfEvents-input block p-2 rounded-md text-base font-normal w-72 mt-2"
                    type="number"
                    value={this.state.eventsNumber}
                    onChange={this.handleInputChange}
                    ></input>
                </label>
            </div>
        )
    }
}

export default NumberOfEvents;