import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    person: { name: "Akash", status: "single" },
  };

  switchStatusHandler() {
    this.setState({
      person: { name: "Super akash", status: "committed" },
    });
  }

  changeNameHandler(e) {
    this.setState({
      person: { name: e.target.value, status: "committed" },
    });
  }

  render() {
    return (
      <div className="App">
        <h2>I'm a react app</h2>

        <UserInput change={this.changeNameHandler.bind(this)} />
        <UserOutput
          name={this.state.person.name}
          status={this.state.person.status}
        />
        <UserOutput
          name={this.state.person.name}
          status={this.state.person.status}
        />
        <UserOutput name="akash" status={this.state.person.status} />
      </div>
    );
  }
}

export default App;
