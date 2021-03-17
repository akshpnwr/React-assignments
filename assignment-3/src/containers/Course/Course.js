import React, { Component } from "react";

class Course extends Component {
  render() {
    console.log(this.props);
    console.log(new URLSearchParams(this.props.location.search));
    return (
      <div>
        <h1>{new URLSearchParams(this.props.location.search).get("title")}</h1>
        <p>
          You selected the Course with ID:{" "}
          {new URLSearchParams(this.props.location.search).get("id")}
        </p>
      </div>
    );
  }
}

export default Course;
