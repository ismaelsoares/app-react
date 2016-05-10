import React from 'react';

let Timer = React.createClass({
  getInitialState(){
    return{elapsed : 0};
  },
  componentDidMount(){
    this.timer = setInterval(this.tick, 50);
  },
  componentDidUnmount(){
    clearInterval(this.timer);
  },
  tick(){
    this.setState({elapsed: new Date() - this.props.start});
  },
  render(){
    let elapsed = Math.round(this.state.elapsed/100);
    let seconds = (elapsed /10).toFixed(1);
    return(
      <p>Ja se passaram <b>{seconds}</b> segundos.</p>
    );
  }
});
export default Timer;
