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

    return (
      <div style={divStyle}>
        <input type="text" onChange={this.handleX} />
        <br />
        <button onClick={this.togleCarsHandler}>Togle Cars</button>

        <h1 style={{ color: "red" }}>{this.state.pageTitle}</h1>
        {this.state.showCars ?
          // "?" operator can be used inside jsx instead of "if"
          this.state.cars.map((car, index) => {
            return (
              <Car
                key={index}
                name={car.name}
                year={car.year}
                clickHandle={this.changeTitleHandler.bind(this, car.name)}
              />
            )
          })
          : null
        }
      </div>
    );
  }
}

export default App;
