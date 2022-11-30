import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        eventsNum: '32',
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ 
            eventsNum: value, 
        });
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <label>
                    Number of Events
                    <input 
                    className="NumberOfEvents-input"
                    type="number"
                    value={this.state.eventsNum}
                    onChange={this.handleInputChange}
                    ></input>
                </label>
            </div>
        )
    }
}

export default NumberOfEvents;