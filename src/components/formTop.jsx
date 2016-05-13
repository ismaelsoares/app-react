import React from 'react';

let FormTop = React.createClass({
  OnTextChanged(e){
    this.props.onTextChanged(e.target.value);
  },
  render(){
    return(
      <div className="formTop">
        <input onChange={this.OnTextChanged} placeholder="Search..."/>
        <input ref="theCheckbox" type="checkbox"/>Only products in stock
      </div>
    );
  }
});
export default FormTop;




//checked={this.props.valueLink.value} onChange={this.handleChange}
