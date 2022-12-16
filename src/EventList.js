import React from "react";
import Event from "./Event";
// import NumberOfEvents from "./NumberOfEvents";

function EventList(props) {
    const { events, eventsNumber } = props;
    return (
        <div className="w-full md:w-4/5 lg:w-9/12">
            <h2 className="text-4xl text-center font-bold text-coral">Events</h2>
            <ul className="EventList grid lg:grid-cols-2">
                {events.slice(eventsNumber ? -eventsNumber : events.length).map(event =>
                    <li className="h-min m-8 p-6 bg-navy/75 text-white dark:bg-white/75 dark:text-navy rounded-xl" key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default EventList;