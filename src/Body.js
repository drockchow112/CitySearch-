import React, { Component } from "react";

const axios = require("axios");

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { city: this.props.city, cityZips:[], error: false}; // info is used to store the json
  }

  componentDidMount() {
    let citystr = this.state.city.toUpperCase();
    axios
      .get("http://ctp-zip-api.herokuapp.com/city/" + citystr)
      .then(response => {
        const data = response.data;
        this.setState({ city: this.props.city, cityZips: data, error:false }); // mounts the name of the city, json and error.
      })
      .catch
      (err => {
        console.log("Wrong!")
         this.setState({ error: true });

      
       });
  }

  componentDidUpdate(prevProps) {
        let citystr = this.state.city.toUpperCase();

    if (prevProps !== this.props.city) {  
      
      axios
        .get("http://ctp-zip-api.herokuapp.com/city/" + citystr)
        .then(response => {
          const data = response.data;  
          this.setState({ city: this.props.city,cityZips:data})
        })
        .catch(err => {
                console.log("Wrong!");
               
});
        
       } else {
          console.log("Error :(")
          
        }
    
  }

  render() {
    const error = this.state.error;
    const zipCodes = this.state.cityZips.map((
      zipCode // put the zipCodes in an array, and turn it into an ordered list
    ) => (
      <ul>
        <li>{zipCode}</li>
      </ul>
    ));
    return (
     <div>
       {error? <div>City not found</div>
        : <div>{zipCodes}</div>
       }
     </div>

    );
  }
}

export default Body;
