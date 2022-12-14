import React, { Component } from "react";
import moment from "moment/moment";

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
            <div className="event ">
                <h2 className="summary text-2xl">{event.summary}</h2>
                <div className="information my-3">
                    <p className="date">{moment(event.start.dateTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p className="time">{event.start.timeZone} time zone</p>
                    <p className="location">{event.location}</p>
                </div>
                {!isHidden && (
                    <div className="details border-solid border-4 border-coral rounded-t-lg p-4">
                        <h3 className="details-title text-lg font-semibold mb-2">About the event:</h3>
                        <p className="details-description my-2">{event.description}</p>
                        <a 
                        className="details-link underline underline-offset-4 block mb-6"
                        href={event.htmlLink}
                        target='_blank'
                        >See details on Google Calendar</a>
                    </div>
                )}
                <button
                 className="toggle-details text-dark-navy bg-coral p-2 w-full rounded-b-lg outline-none"
                 onClick={() => this.toggleDetails()}
                 >{isHidden ? 'Show Details' : 'Hide Details' }</button>
            </div>     
        );
    }
};

export default Event;