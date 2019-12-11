import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Event from './Event';
import { events } from './data.js';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background: #f0f0f0;
`;

const Events = styled.div`
  display: flex;
`;

//This function renders all the events in the landing page, using data from the 'data.js' file.
function renderHome() {
  return (
    <Events>
      {events.map(event => (
        <Home
          id={event.id}
          name={event.name}
          date={event.date}
          locationName={event.locationName}
          location={event.location}
          organizer={event.organizer}
          image={event.image}
          eventURL={event.eventURL}
        />
      ))}
    </Events>
  );
}

//This function renders a new page with the selected event, showing the Stay22 map.
function renderEvent(routerData) {
  const eventId = routerData.match.params.id;
  console.log('eventId', eventId);
  console.log('events', events);
  // const eventToShow = events.find(event => {
  //   return event.id === eventId;
  // });
  console.log('eventToShow', events[eventId]);
  return <Event event={events[eventId]} />;
}

//Very basic navigation with only two routes and persistend NavBar.
function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <div>
          <Route path='/' exact render={renderHome} />
          <Route path='/event/:id' render={renderEvent} />
        </div>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
