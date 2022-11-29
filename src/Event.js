import React, { Component } from "react";

class Event extends Component {
    state = { isHidden: true };

    toggleDetails = () => {
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden
        }));
    }

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
                        <h3 className="details-title">About the event:</h3>
                        <a 
                        className="details-link"
                        href={event.htmlLink}
                        >See details on Google Calendar</a>
                        <p className="details-description">{event.description}</p>
                    </div>
                )}
                <button
                 className="toggle-details"
                 onClick={() => this.toggleDetails()}
                 >{isHidden ? 'Show Details' : 'Hide Details' }</button>
            </div>     
        );
    }
};

export default Event;