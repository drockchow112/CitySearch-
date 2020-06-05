import React, { Component } from "react";
import "./App.css";
import Body from "./Body";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cityText: " ", showZipCodes:false, city: ""};
    this.handleChange = this.handleChange.bind(this);
    this.showCards = this.showCards.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(e) {
    // for handling the text box in the zip code
    this.setState({
      cityText: e.target.value
    });
  }

  showCards(e) { // event handler for the button. 
        this.clear()
        this.setState( // sets the state according to the input in the text box. 
          {city: this.state.cityText, showZipCodes:true}
        )
        console.log("Button val: "+ this.state.city)
    }

  
    clear() { //clears the div according to the ternary operator. 
      this.setState({showZipCodes:false});
    }
  

  render() {
    const showZipCodes = this.state.showZipCodes;
    const city = this.state.city;
    return (
      <div className="container">
        <h1>City Search</h1>
        <input type="text" onChange={this.handleChange} />
        <button value = {this.state.city} onClick={this.showCards}>Submit</button>
        <button onClick={this.clear}>Clear</button>
        {showZipCodes
        ?  <Body city={city}/>
        :  <div></div>
        }
      </div>
    );
  }
}

export default App;
