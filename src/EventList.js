import React from "react";
import Event from "./Event";

function EventList(props) {
    const { events } = props;
    return (
        <ul className="EventList">
            {events.map(event =>
                <li key={event.id}>
                    <Event event={event} />
                </li>
                )}
        </ul>
    ); 
};  

export default EventList;