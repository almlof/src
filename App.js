import React from 'react';
import propTypes from 'prop-types';
var PropTypes = require('prop-types');


class App extends React.Component {
constructor(){

  super();
  this.state = { val: 0 }
  this.update = this.update.bind(this)
}
update(e){
  this.setState({val: this.state.val +1})
}
  render(){
    console.log('render');
    return <div>
    <button onClick= {this.update}>{this.state.val}</button>
    <p> hello</p>
    </div>

  }
}



export default App
