import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Event from './Event';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background: #f0f0f0;
`;

function renderHome() {
  return <Home />;
}

function renderEvent(routerData) {
  const eventId = routerData.match.params.deckId;
  return <Event id={eventId} />;
}

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Route path='/' exact render={renderHome} />
        <Route path='/event/:eventId' render={renderEvent} />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
