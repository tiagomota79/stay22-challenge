import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #f0f0f0
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 25%;
  transition: all 0.25s ease-in-out;

  :hover {
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.25);
  }
`;

const Image = styled.img`
  width: auto;
  height: 100px;
`;

const Button = styled(Link)`
  background-color: #2744f5;
  color: white;
  text-decoration: none;
  padding: 5%;
  border-radius: 50px;
  transition: all 0.25s ease-in-out;

  :hover {
    color: #2744f5;
    background-color: #f0f0f0;
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.25);
    font-weight: bold;
  }
`;

//This component renders each "event card", displaying the event's basic information.
class Home extends Component {
  render() {
    return (
      <Card id='eventCard'>
        <Image src={this.props.image} />
        <h3 id='name'>{this.props.name}</h3>
        <h5 id='date'>{this.props.date}</h5>
        <p id='location'>
          <strong>{this.props.locationName}</strong>
          <br></br>
          {this.props.location}
        </p>
        <h6 id='organizer'>Organized by {this.props.organizer}</h6>
        <Button to={'/event/' + this.props.id}>Party here!</Button>
      </Card>
    );
  }
}

export default Home;
