import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  fooo = () => "bars";
  render() {
    const name = "Edyta";
    const foo = () => "bar";
    return (
      // this is JSX (JavaScript Syntax Extension) inside, it needs to have only one parent element (can be div, React.Fragment or empty element <>) use "className" instead of "class" like in pure HTML, "forHtml" instead "for"
      // we don't need to use JSX, but it makes it easier
      <div className='App'>
        <h1>Hello {name}</h1>
        <h1>Hello {foo()}</h1>
        <h1>Hello {this.fooo()}</h1>
      </div>
    );
  }
}

export default App;
