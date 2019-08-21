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

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    // const cars = this.setState.cars.concat()
    // same variant but with new syntaxis
    const cars = [...this.state.cars]
    cars[index] = car
    // this.setState({cars:cars})
    // same variant but with new syntaxis
    this.setState({ cars })

  }


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
            // onChangeName={this.onChangeName.bind(this, car.name)}
            //
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
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
