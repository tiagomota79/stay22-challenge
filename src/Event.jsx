import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//This component displays the selected event with the Stay22 widget, using information passed as props from App.js.
class Event extends Component {
  render() {
    let stay22WidgetURL = `https://www.stay22.com/embed/gm?address=${this.props.event.location}&checkin=${this.props.event.date}`;
    return (
      <div id='event'>
        <h3>{this.props.event.name}</h3>
        <iframe
          src={stay22WidgetURL}
          id='stay22-widget'
          width='100%'
          height='460'
          frameBorder='0'
        ></iframe>
      </div>
    );
  }
}

export default Event;
