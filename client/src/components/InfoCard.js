import React from 'react';
import axios from 'axios';

const containerStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  width: '100%',
  justifyContent: 'space-evenly'
}

const cardStyle = {
  width: '400px',
  height: '300px',
  padding: '10px',
  margin: '3%',
  border: '1px solid black',
  borderRadius: '10px',
  background: 'white',
  color: 'black'
}

class InfoCard extends React.Component {
  constructor() {
    super();
    this.state = {
      runners: [],
    }

    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log('This is the response: ', response);
        this.setState({
          runners: response.data
        })
        console.log('State of runners: ', this.state.runners);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <>
        <div style={containerStyle}>
          {this.state.runners.map(runner => (
            <div style={cardStyle} key={runner.id}>
              <h1>{runner.name}</h1>
              <h2>Country: {runner.country}</h2>
              <h2>Searches: {runner.searches}</h2>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default InfoCard;