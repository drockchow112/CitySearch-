import React, { Component } from "react";
import axios from "axios";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcodes: [],
      message: ""
    };
    console.log(this.state.city);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      let city = this.props.city;
      console.log(city);
      axios
        .get(`http://ctp-zip-api.herokuapp.com/city/${city}`)
        .then((res) => {
          this.setState({ zipcodes: res.data, message: "Here you go!" });
        })
        .catch((error) => {
          if (error.response) {
            this.setState({
              message: "Please enter an appropriate city name",
              zipcodes: []
            });
          }
        });
    }
  }

  render() {
    const showPlaces = this.state.zipcodes.map((zipcode) => {
      return (
        <>
          <div className="card inline">
            <div className="card-header">{zipcode}</div>
          </div>
        </>
      );
    });
    return (
      <>
        <h4 className="App">{this.state.message}</h4>
        <div className="App row" key={this.props.city}>
          {showPlaces}
        </div>
      </>
    );
  }
}

export default City;
