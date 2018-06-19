import style from "../css/style.css";

// with this we can import React to use it
import React from 'react';
// this lib is needed to place our React App into the HTML
import ReactDOM from 'react-dom';

import data from './data.json';


class App extends React.Component {
 

  render() 
          {
      return (
      
        <ul>
        {
          data.map(function(DataJSON){
            return <li>{DataJSON.title} - {DataJSON.content} - {DataJSON.slug}</li>;
          })
        }
        </ul>
      
      
      );
           }


};
  
export default App;



// this is responsible write it on the DOM.
ReactDOM.render(<App />, document.querySelector('#app'));




  