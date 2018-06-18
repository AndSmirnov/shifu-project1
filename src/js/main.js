import style from "../css/style.css";

// with this we can import React to use it
import React from 'react';
// this lib is needed to place our React App into the HTML
import ReactDOM from 'react-dom';

// this is the minimal example
class App extends React.Component {
  render() {
    return (<p>Андрей запустил проект, какой он молодец!</p>);
  }
}

// Also it can be written in this way. However this way is going to be taught later.
// const App = () => <p>Hello world</p>;

// this is responsible write it on the DOM.
ReactDOM.render(<App />, document.querySelector('#app'));