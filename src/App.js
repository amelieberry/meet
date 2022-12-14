import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import WelcomeScreen from './WelcomeScreen';
import { checkToken, getAccessToken, extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';
import './nprogress.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsNumber: 32,
    isLight: true,
    isLoaded: false,
    showWelcomeScreen: undefined,
  }

  updateLocation = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  }

  updateEventsNumber = (eventNumb) => {
    getEvents().then(() => {
      this.setState({
        eventsNumber: eventNumb,
      });
    });
  }

  toggleTheme = () => {
    this.setState((currentState) => ({
      isLight: !currentState.isLight
    }));
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });

    // getEvents().then((events) => {
    //   if (this.mounted) {
    //     this.setState({
    //       events, locations: extractLocations(events),
    //       isLoaded: true
    //     });
    //   }
    // });

    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events, locations: extractLocations(events),
            isLoaded: true
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events, showWelcomeScreen, isLight, isLoaded } = this.state;

    if (showWelcomeScreen === undefined) return <div className='App' />;

    return (
      <div className="App bg-white dark:bg-dark-navy text-navy dark:text-white text-lg font-sans min-h-screen flex items-center flex-col tracking-wide">
        <button
          id='theme-toggle'
          aria-label="toggleTheme"
          className='rounded-md bg-navy dark:bg-light-blue text-white dark:text-navy p-3 absolute top-2 right-2'
          onClick={() => this.toggleTheme()}
        >{isLight ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          }</button>
        <h1 className='text-5xl font-extrabold text-navy dark:text-coral my-11'>Meet App</h1>
        <div className='w-full flex flex-wrap justify-center'>
          <CitySearch locations={this.state.locations} updateLocation={this.updateLocation} />
          <NumberOfEvents eventsNumber={this.state.eventsNumber} updateEventsNumber={this.updateEventsNumber} />
        </div>
        <div className='WarningAlert mb-9 mx-2 text-center'>
          {!navigator.onLine && (
            <WarningAlert text={'You are currently offline, the events may not be up to date.'} />
          )}
        </div>
        <h2 className="text-4xl mb-4 text-center font-bold text-navy dark:text-coral">Charts</h2>
        {!showWelcomeScreen && (
          <Carousel showThumbs={false} showStatus={false} showArrows={false} className='data-vis-wrapper w-full mx-6'>
          <EventGenre className="mb-20" events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
              <CartesianGrid strokeDasharray="3 3" stroke='#a6afbd' />
              <XAxis type='category' dataKey="city" name="city" />
              <YAxis type='number' dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" className='dark:fill-coral' />
            </ScatterChart>
          </ResponsiveContainer>
        </Carousel>
        )}
        <div className='w-full flex justify-center mt-4'>
          {(!isLoaded)
            ? <div className='loader border-solid border-4 border-white border-t-coral rounded-full animate-spin w-14 h-14'></div>
            : <EventList events={events} updateEventsNumber={this.updateEventsNumber} eventsNumber={this.state.eventsNumber} />}
        </div>
        <WelcomeScreen showWelcomeScreen={showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
