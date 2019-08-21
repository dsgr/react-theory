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
    pageTitle: 'Default Title',
    showCars: false
  }

  handleX = (event) => {
    console.log(event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }

  changeTitleHandler = (pageTitle) => this.setState({ pageTitle });

  togleCarsHandler = (pageTitle) => this.setState({ showCars: !this.state.showCars });

  render() {
    const divStyle = {
      'textAlign': 'center'
    }

    let cars = null
    //if can be used outside jsx
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            clickHandle={this.changeTitleHandler.bind(this, car.name)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <input type="text" onChange={this.handleX} />
        <br />
        <button onClick={this.togleCarsHandler}>Togle Cars</button>

        <h1 style={{ color: "red" }}>{this.state.pageTitle}</h1>

        { 
          cars //can be null or filled array
        }
      </div>
    );

  }
}
export default App;
