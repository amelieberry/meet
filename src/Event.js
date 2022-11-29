import React, { Component } from "react";

class Event extends Component {
    state = { isHidden: true };

    render() {
        const { event } = this.props;
        const { isHidden } = this.state;
        return (
            <div className="event">
                <h2 className="summary">{event.summary}</h2>
                <div className="information">
                    <p className="date">{event.start.dateTime}</p>
                    <p className="time">{event.start.timeZone}</p>
                    <p className="location">{event.location}</p>
                </div>
                {!isHidden && (
                    <div className="details">
                        <p className="details-title">About the event:</p>
                    </div>
                )}
                <button className="toggle-details">{isHidden ? 'Show Details' : 'Hide Details' }</button>
            </div>     
        );
    }
};

export default Event;