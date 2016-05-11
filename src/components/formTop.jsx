import React from 'react';

let FormTop = React.createClass({
  render(){
    return(
      <div className="formTop">
        <input placeholder="Search..."/>
        <input ref="theCheckbox" type="checkbox"/>Only products in stock
      </div>
    );
  }
});
export default FormTop;




//checked={this.props.valueLink.value} onChange={this.handleChange}
