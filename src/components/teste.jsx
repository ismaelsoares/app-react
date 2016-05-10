import React from 'react';

let Teste = React.createClass({
  getInitialState(){
    return{counter: 0}
  },
  handleClickButton(){
    this.setState({counter: this.state.counter + 1})
  },
  render(){
    return(
      <div>
        <button onClick={this.handleClickButton}>Contador</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
});
export default Teste;
