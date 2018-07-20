import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // goToDashboard(event) {
  //   event.preventDefault();
  //   console.log("I am Clicked");
  // }

  goToDashboard = event => {
    event.preventDefault();
    console.log("I am Clicked");
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.goToDashboard}>
          <label>FirstName</label>
          <input type="text" placeholder="Email" name="email" />
          <br />
          <label>Password</label>
          <input type="password" placeholder="password" name="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
