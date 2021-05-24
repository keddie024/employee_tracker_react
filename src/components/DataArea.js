import React, { Component } from "react";

class DataArea extends Component {
  state = {
    employees: [],
    sortBy: null
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then(res => res.json())
      .then(json => {
        const employees = json.results.map(employee => {
          return {
            firstName: employee.name.first,
            lastName: employee.name.last,
            gender: employee.gender,
            img: employee.picture.thumbnail
          };
        });
        this.setState({ employees });
      })
  }

  sortFirstName = () => {
    let employees = [...this.state.employees];

    employees.sort((a, b) => a.firstName.localeCompare(b.firstName));
    this.setState({ employees });
  }

  sortLastName = () => {
    let employees = [...this.state.employees];

    employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
    this.setState({ employees });
  }

  render() {
    if (!this.state.employees.length) {
      return <div>No employees found!</div>
    }

    return (
      <div>
        <button onClick={this.sortFirstName}>Sort by First Name</button>
        <button onClick={this.sortLastName}>Sort by Last Name</button>

        <table>
          <tr><th></th><th>Name:</th><th>Gender:</th></tr>
          {this.state.employees.map(employee => (
            <tr>
              <td><img src={employee.img} alt={employee.firstName} /></td>
              <td>{employee.firstName} {employee.lastName}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }

}

export default DataArea;