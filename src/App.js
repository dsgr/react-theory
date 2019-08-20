import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: 2019 },
      { name: 'AUDI', year: 2018 }
    ],
    pageTitle: 'Default Title'
  }

  handleX = (event) => {
    console.log(event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    const divStyle = {
      'textAlign': 'center'
    }

    return (
      <div style={divStyle}>
        <input type="text" onChange={this.handleX} />

        <h1 style={{ color: "red" }}>{this.state.pageTitle}</h1>
        <Car name={this.state.cars[0].name} year={this.state.cars[0].year} />
        <Car name={this.state.cars[1].name} year={this.state.cars[1].year} />

      </div>
    );
  }
}

export default App;
