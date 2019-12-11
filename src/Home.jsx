import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #243047;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

const Image = styled.img`
  width: auto;
  height: 100px;
`;

//This component renders each "event card", displaying the event's basic information.
class Home extends Component {
  render() {
    return (
      <Card id='eventCard'>
        <Image src={this.props.image} />
        <h3 id='name'>{this.props.name}</h3>
        <div id='date'>{this.props.date}</div>
        <div id='location'>
          {this.props.locationName} - {this.props.location}
        </div>
        <div id='organizer'>Organized by {this.props.organizer}</div>
        <Link to={'/event/' + this.props.id}>Party here!</Link>
      </Card>
    );
  }
}

export default Home;
