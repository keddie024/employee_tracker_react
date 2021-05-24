import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class DataArea extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(json => {
      const employees = json.results.map(employee => {
        return {
          firstName: employee.name.first,
          lastName: employee.name.last,
          img: employee.picture.thumbnail
        };
      });
      this.setState({employees});
    })
  }


  
}

export default DataArea;