import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsNumber: 32,
  }

  updateLocation = (location) => {
    const { eventsNumber } = this.state;
    getEvents().then((events) => {      
      const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventsNumber),        
      });
    });
  }

  updateEventsNumber = (eventNumb) => { 
    getEvents().then((events) => {
      this.setState({
        eventsNumber: eventNumb,
        events: events.slice(0, eventNumb),
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events, locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App bg-light-blue text-navy text-lg font-sans min-h-screen flex items-center flex-col">
        <h1 className='text-5xl font-extrabold text-white m-8'>Meet App</h1>
        <CitySearch locations={this.state.locations} updateLocation={this.updateLocation} />
        <NumberOfEvents eventsNumber={this.state.eventsNumber} updateEventsNumber={this.updateEventsNumber} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
