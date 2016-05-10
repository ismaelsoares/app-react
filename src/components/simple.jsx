import React from 'react';

let Simple = React.createClass({
  getInitialState(){
    return{count: 0};
  },
  handleMouseDown(){
    alert('I was told: '+ this.props.message);
    this.setState({
      count: this.state.count + 1
    });
  },
  render(){
    return(
      <div>
      <div class="clicker" onMouseDown={this.handleouseDown}>Give me the message!</div>
      <div class="message"> Message coveyed
      <span class="count">{this.state.count}</span> time(s)</div>
      </div>
    );
  }
});
export default Simple;
