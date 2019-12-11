import React, { Component } from 'react';
import styled from 'styled-components';

const EventBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  text-align: center;
  align-self: center;
  align-items: center;
  margin: auto;
  margin-bottom: 5%;
`;

const Image = styled.img`
  width: 70%;
`;

const Button = styled.a`
  background-color: #2744f5;
  width: 30%;
  margin: auto;
  color: white;
  text-decoration: none;
  padding: 2%;
  margin-top: 2%;
  border-radius: 50px;
  transition: all 0.25s ease-in-out;

  :hover {
    color: #2744f5;
    background-color: #f0f0f0;
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.25);
    font-weight: bold;
  }
`;

//This component displays the selected event with the Stay22 widget, using information passed as props from App.js.
class Event extends Component {
  render() {
    let stay22WidgetURL = `https://www.stay22.com/embed/gm?address=${this.props.event.location}&checkin=${this.props.event.date}`;
    return (
      <EventBox id='event'>
        <Image src={this.props.event.image} />
        <h2>{this.props.event.name}</h2>
        <h4>{this.props.event.date}</h4>
        <p>Organized by {this.props.event.organizer}</p>
        <h4>
          {this.props.event.locationName} -{this.props.event.location}
        </h4>
        <iframe
          src={stay22WidgetURL}
          id='stay22-widget'
          width='100%'
          height='460'
          frameBorder='0'
          title='Stay22 Map Widget showing hosting options near the event area'
        ></iframe>
        <Button href={this.props.event.eventURL} target='_blank'>
          Go to event page
        </Button>
      </EventBox>
    );
  }
}

export default Event;
