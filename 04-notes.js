If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.p
children will return the single child, not wrapped in an array.
--------------------
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: "I am a button"}

ReactDOM.render(
  <Button text="" />, 
  document.getElementById('app')
);
======================
state
=====
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = {title: 'Best App'};
	}
  render() {
    return (
      <h1>
       {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(
<App />
  document.getElementById('app')
);