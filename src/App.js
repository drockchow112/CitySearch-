import React, { Component } from "react";
import City from "./components/City";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { city: null };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ city: e.target.value });
  };

  showCity = () => {
    if (this.state.city !== null) {
      return <City city={this.state.city.toUpperCase()} />;
    }
  };

  render() {
    return (
      <>
        <h1 className="App">City Search</h1>
        <form className="App search-bar">
          <input
            className="search form-control"
            type="text"
            onChange={this.handleChange}
          ></input>
        </form>
        {this.showCity()}
      </>
    );
  }
}

export default App;
