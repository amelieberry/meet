import React from "react";
import Event from "./Event";
// import NumberOfEvents from "./NumberOfEvents";

function EventList(props) {
    const { events, eventsNumber } = props;
    return (
        <div className="w-full md:w-4/5 lg:w-9/12">
            <h2 className="text-4xl mb-4 text-center font-bold text-navy dark:text-coral mt-4">Events</h2>
            <ul className="EventList grid lg:grid-cols-2 ">
                {(eventsNumber ? events.slice(0, eventsNumber) : events.slice(events.length)).map(event =>
                    <li className="h-min m-4 p-6 bg-navy/10 dark:bg-navy text-navy dark:text-white rounded-xl border-solid border-2 border-coral" key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default EventList;